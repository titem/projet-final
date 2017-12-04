import { OnGet, Request, Route } from '@hapiness/core';
import { Observable } from 'rxjs/Observable';
import * as Joi from 'joi';
import { Nursery } from '../../../interfaces/nursery';
import { NurseryService } from '../../../services/nursery';

@Route({
    path: '/api/nurseries/{id}',
    method: 'GET',
    config: {
        validate: {
            params: {
                id: Joi.string().required()
            }
        },
        response: {
            status: {
                200: Joi.object().keys({
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
                        user: Joi.object().keys({
                            id: Joi.string().required(),
                            fullname: Joi.string().required(),
                        }).required(),
                        rating: Joi.number().required(),
                        text: Joi.string().required()
                    }))
                })
            }
        },
        description: 'Get one nursery',
        notes: 'Returns one nursery for the given id in path parameter',
        tags: ['api', 'nurseries']
    }
})
export class GetOneNurseryRoute implements OnGet {
    /**
     * Class constructor
     * @param _nuseryService
     */
    constructor(private _nuseryService: NurseryService) {}

    /**
     * OnGet implementation
     * @param request
     */
    onGet(request: Request): Observable<Nursery> {
        return this._nuseryService.one(request.params.id);
    }
}