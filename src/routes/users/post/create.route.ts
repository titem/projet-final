import { HapinessHTTPHandlerResponse } from '@hapiness/core/extensions/http-server';
import { UserService } from '../../../services';
import { User } from '../../../interfaces';
import { Observable } from 'rxjs/Observable';
import { OnPost, Request, Route } from '@hapiness/core';
import * as Joi from 'joi';

@Route({
    path: '/api/users',
    method: 'POST',
    config: {
        validate: {
            payload: Joi.object().keys({
                email: Joi.string().email().required(),
                fullname: Joi.string().required(),
                password: Joi.string().required()
            }).required()
        },
        payload: {
            output: 'data',
            allow: 'application/json',
            parse: true
        },
        response: {
            status: {
                201: Joi.object().keys({
                    id: Joi.string().required(),
                    email: Joi.string().email().required(),
                    fullname: Joi.string().required(),
                    password: Joi.string().allow('').max(0)
                })
            }
        },
        description: 'Create one user',
        notes: 'Create a new user and return it',
        tags: ['api', 'user']
    }
})
export class PostCreateUserRoute implements OnPost {
    /**
     * Class constructor
     * @param _userService
     */
    constructor(private _userService: UserService) {
    }

    /**
     * OnPost implementation
     * @param request
     */
    onPost(request: Request): Observable<HapinessHTTPHandlerResponse> {
        return this._userService.create(request.payload as User);
    }
}
