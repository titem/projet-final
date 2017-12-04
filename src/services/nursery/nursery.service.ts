import { Injectable } from '@hapiness/core';
import { NurseryDocumentService } from '../nursery-document';

import { Comment, Nursery } from '../../interfaces/nursery';
import { AbstractService } from '../abstract';
import { Observable } from 'rxjs/Observable';
import { HapinessHTTPHandlerResponse } from '@hapiness/core/extensions/http-server';
import { catchError, map } from 'rxjs/operators';
import { Biim } from '@hapiness/biim';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class NurseryService extends AbstractService<Nursery> {
    /**
     * Class constructor
     */
    constructor(private _nurseryDocumentService: NurseryDocumentService) {
        super(_nurseryDocumentService, 'Nursery');
    }

    createComment(id: string, comment: Comment): Observable<HapinessHTTPHandlerResponse> {
        return this._nurseryDocumentService.createComment(id, comment)
            .pipe(
                catchError(e => _throw(Biim.conflict(e.message))),
                map(_ => ({ response: _, statusCode: 201 }))
            );
    }
}
