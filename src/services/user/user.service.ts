import {Injectable} from '@hapiness/core';
import {HapinessHTTPHandlerResponse} from '@hapiness/core/extensions/http-server';
import {Biim} from '@hapiness/biim';

import {UserDocumentService} from '../user-document';
import {User} from '../../interfaces';

import {_throw} from 'rxjs/observable/throw';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(private _userDocumentService: UserDocumentService) {}

    create(user: User): Observable<HapinessHTTPHandlerResponse> {
        return this._userDocumentService.create(user)
            .pipe(
                catchError(e => _throw(Biim.conflict(e.message))),
                map(_ => ({ response: _, statusCode: 201 }))
            );
    }
}
