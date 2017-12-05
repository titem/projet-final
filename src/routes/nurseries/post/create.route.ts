import { HapinessHTTPHandlerResponse } from '@hapiness/core/extensions/http-server';
import { Observable } from 'rxjs/Observable';
import { OnPost, Request, Route } from '@hapiness/core';
import { NurseryService } from '../../../services/nursery';
import { Nursery } from '../../../interfaces/nursery';
import * as Joi from 'joi';

@Route({
    path: '/api/nurseries',
    method: 'POST',
    config: {
        validate: {
            payload: Joi.object().keys({
                name: Joi.string().required(),
                img: Joi.string(),
                email: Joi.string().email(),
                phone: Joi.string(),
                website: Joi.string().uri(),
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
                ageLimits: Joi.string()
            })
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
                    img: Joi.string(),
                    email: Joi.string().email(),
                    phone: Joi.string(),
                    website: Joi.string().uri(),
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
                    comments: Joi.array()
                })
            }
        },
        description: 'Create one nursery',
        notes: 'Create a new nursery and return it',
        tags: ['api', 'nurseries']
    }
})
export class PostCreateNurseryRoute implements OnPost {
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
        return this._nurseryService.create(request.payload as Nursery);
    }
}
