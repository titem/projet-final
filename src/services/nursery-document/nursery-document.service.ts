import { Injectable } from '@hapiness/core';
import { Config } from '@hapiness/config';
import { MongoClientService } from '@hapiness/mongo';

import { NurseryModel } from '../../models/nursery';
import { Nursery } from '../../interfaces/nursery';

import { fromPromise } from 'rxjs/observable/fromPromise';
import { _throw } from 'rxjs/observable/throw';
import { flatMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { MongooseDocument } from 'mongoose';
import { of } from 'rxjs/observable/of';
import { DocumentService } from '../../interfaces/documentService';


@Injectable()
export class NurseryDocumentService implements DocumentService<Nursery> {
    // private property to store document instance
    private _document: any;

    /**
     * Class constructor
     *
     * @param {MongoClientService} _mongoClientService
     */
    constructor(private _mongoClientService: MongoClientService) {
        this._document = this._mongoClientService.getModel({
            adapter: 'mongoose',
            options: Config.get('mongodb')
        }, NurseryModel);
    }

    find(): Observable<Nursery[] | void> {
        return null;
    }

    findById(id: string): Observable<Nursery | void> {
        return fromPromise(this._document.findById(id).populate('comments.user', 'fullname'))
            .pipe(
                flatMap((doc: MongooseDocument) =>
                    !!doc ?
                        of(doc.toJSON() as Nursery) :
                        of(undefined)
                )
            )
    }

    create(nursery: Nursery): Observable<Nursery> {
        return fromPromise(this._document.findOne({
            name: { $regex: new RegExp(nursery.name, 'i') }
        }))
            .pipe(
                flatMap(_ => !!_ ?
                    _throw(
                        new Error(`Nursery with name '${nursery.name}' already exists`)
                    ) :
                    fromPromise(this._document.create(nursery))
                ),
                map((doc: MongooseDocument) => doc.toJSON() as Nursery)
            );
    }

    findByIdAndUpdate(id: string, document: Nursery): Observable<Nursery> {
        return undefined;
    }

    findByIdAndRemove(id: string): Observable<Nursery> {
        return undefined;
    }
}

