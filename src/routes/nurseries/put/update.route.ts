import { OnPut, Request, Route } from '@hapiness/core';

import { NurseryService } from '../../../services';
import { Nursery } from '../../../interfaces';

import { Observable } from 'rxjs/Observable';
import * as Joi from 'joi';

@Route({
    path: '/api/nurseries/{id}',
    method: 'PUT',
    config: {
        validate: {
            params: {
                id: Joi.string().required()
            },
            payload: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().email().required(),
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
                200: Joi.object().keys({
                    id: Joi.string().required(),
                    name: Joi.string().required(),
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
                    comments: Joi.array().items(Joi.object().keys({
                        id: Joi.string(),
                        user: Joi.any().required(),
                        rating: Joi.number().required(),
                        text: Joi.string().required()
                    }))
                })
            }
        },
        description: 'Update one nursery',
        notes: 'Update the nursery for the given id in path parameter and return it',
        tags: ['api', 'nurseries']
    }
})
export class PutUpdateNurseryRoute implements OnPut {
    /**
     * Class constructor
     * @param _nurseryService
     */
    constructor(private _nurseryService: NurseryService) {
    }

    /**
     * OnPut implementation
     * @param request
     */
    onPut(request: Request): Observable<Nursery> {
        return this._nurseryService.update(request.params.id, request.payload);
    }
}
