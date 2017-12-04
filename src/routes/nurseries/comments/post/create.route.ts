import { HapinessHTTPHandlerResponse } from '@hapiness/core/extensions/http-server';
import { Observable } from 'rxjs/Observable';
import { OnPost, Request, Route } from '@hapiness/core';
import * as Joi from 'joi';
import { NurseryService } from '../../../../services/nursery/nursery.service';
import { Comment } from '../../../../interfaces/nursery';

@Route({
    path: '/api/nurseries/{id}/comments',
    method: 'POST',
    config: {
        validate: {
            payload: Joi.object().keys({
                user: Joi.string().required(),
                rating: Joi.number().required(),
                text: Joi.string().required()
            }).required(),
            params: {
                id: Joi.string().required()
            }
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
                    name: Joi.string().required(),
                    email: Joi.string().email(),
                    phone: Joi.string(),
                    website: Joi.string(),
                    address: Joi.object().keys({
                        street: Joi.string().required(),
                        postalCode: Joi.number().required(),
                        city: Joi.string().required()
                    }).required(),
                    description: Joi.string(),
                    staffNumber: Joi.number(),
                    openingHours: Joi.string(),
                    admissionConditions: Joi.string(),
                    capacity: Joi.number(),
                    ageLimits: Joi.string(),
                    comments: Joi.array().items(Joi.object().keys({
                        id: Joi.string(),
                        user: Joi.any(),
                        rating: Joi.number().required(),
                        text: Joi.string().required()
                    }))
                })
            }
        },
        description: 'Create a comment and return the nursery',
        notes: 'Create one comment for a nursery identified by id passed as parameter',
        tags: ['api', 'nurseries', 'comments']
    }
})
export class PostCreateNurseryCommentRoute implements OnPost {
    /**
     * Class constructor
     * @param _nurseryService
     */
    constructor(private _nurseryService: NurseryService) {
    }

    /**
     * OnPost implementation
     * @param request
     */
    onPost(request: Request): Observable<HapinessHTTPHandlerResponse> {
        return this._nurseryService.createComment(request.params.id, request.payload as Comment);
    }
}
