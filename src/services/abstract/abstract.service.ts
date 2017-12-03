import { DocumentService } from '../../interfaces/documentService';
import { catchError, flatMap, map } from 'rxjs/operators';
import { HapinessHTTPHandlerResponse } from '@hapiness/core/extensions/http-server';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { Biim } from '@hapiness/biim';
import { Observable } from 'rxjs/Observable';

export abstract class AbstractService<T> {

    constructor(private _documentService: DocumentService<T>, private serviceName: string) {}

    listAll(): Observable<T[] | void> {
        return this._documentService.find();
    }

    /**
     * Returns one people of the list matching id in parameter
     *
     * @param {string} id of the people
     *
     * @returns {Observable<People>}
     */
    one(id: string): Observable<T> {
        return this._documentService.findById(id)
            .pipe(
                catchError(e => _throw(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        _throw(Biim.notFound(`${this.serviceName} with id '${id}' not found`))
                )
            );
    }

    /**
     * Check if person already exists and add it in people list
     *
     * @param document to create
     *
     * @returns {Observable<HapinessHTTPHandlerResponse>}
     */
    create(document: T): Observable<HapinessHTTPHandlerResponse> {
        return this._documentService.create(document)
            .pipe(
                catchError(e => _throw(Biim.conflict(e.message))),
                map(_ => ({ response: _, statusCode: 201 }))
            );
    }

    /**
     * Update a person in people list
     *
     * @param {string} id of the person to update
     * @param document data to update
     *
     * @returns {Observable<People>}
     */
    update(id: string, document: T): Observable<T> {
        return this._documentService.findByIdAndUpdate(id, document)
            .pipe(
                catchError(e => _throw(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        _throw(Biim.notFound(`${this.serviceName} with id '${id}' not found`))
                )
            );
    }

    /**
     * Deletes on person in people list
     *
     * @param {string} id of the person to delete
     *
     * @returns {Observable<any>}
     */
    delete(id: string): Observable<void> {
        return this._documentService.findByIdAndRemove(id)
            .pipe(
                catchError(e => _throw(Biim.preconditionFailed(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(undefined) :
                        _throw(Biim.notFound(`${this.serviceName} with id '${id}' not found`))
                )
            );
    }
}
