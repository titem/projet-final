import {Injectable} from '@hapiness/core';
import {Config} from '@hapiness/config';
import {MongoClientService} from '@hapiness/mongo';

import {UserModel} from '../../models/user';
import {User} from '../../interfaces';

import {fromPromise} from 'rxjs/observable/fromPromise';
import {_throw} from 'rxjs/observable/throw';
import { flatMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { MongooseDocument } from 'mongoose';
import { DocumentService } from '../../interfaces/documentService';

@Injectable()
export class UserDocumentService implements DocumentService<User> {
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
        }, UserModel);
    }

    find(): Observable<User[] | void> {
        return undefined;
    }

    findById(id: string): Observable<void | User> {
        return undefined;
    }

    create(user: User): Observable<User> {
        return fromPromise(this._document.findOne({
            email: { $regex: new RegExp(user.email, 'i') }
        }))
            .pipe(
                flatMap(_ => !!_ ?
                    _throw(
                        new Error(`User with email '${user.email}' already exists`)
                    ) :
                    fromPromise(this._document.create(user))
                ),
                map((doc: MongooseDocument) => doc.toJSON() as User),
                tap((u: User) => u.password = '')
            );
    }

    findByIdAndUpdate(id: string, document: User): Observable<User> {
        return undefined;
    }

    findByIdAndRemove(id: string): Observable<User> {
        return undefined;
    }
}
