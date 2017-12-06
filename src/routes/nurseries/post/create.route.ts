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
                img: Joi.string().allow(''),
                email: Joi.string().email().allow(''),
                phone: Joi.string().allow(''),
                website: Joi.string().uri().allow(''),
                address: Joi.object().keys({
                    street: Joi.string().required(),
                    postalCode: Joi.number().required(),
                    city: Joi.string().required()
                }).required(),
                description: Joi.string().allow(''),
                staffNumber: Joi.number().allow(''),
                openingHours: Joi.string().allow(''),
                admissionConditions: Joi.string().allow(''),
                capacity: Joi.number().allow(''),
                ageLimits: Joi.string().allow('')
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
                    img: Joi.string().allow(''),
                    email: Joi.string().email().allow(''),
                    phone: Joi.string().allow(''),
                    website: Joi.string().uri().allow(''),
                    address: Joi.object().keys({
                        street: Joi.string().required(),
                        postalCode: Joi.number().required(),
                        city: Joi.string().required()
                    }).required(),
                    description: Joi.string().allow(''),
                    staffNumber: Joi.number().allow(''),
                    openingHours: Joi.string().allow(''),
                    admissionConditions: Joi.string().allow(''),
                    capacity: Joi.number().allow(''),
                    ageLimits: Joi.string().allow(''),
                    comments: Joi.array().allow('')
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
