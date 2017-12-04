import { OnGet, Request, Route } from '@hapiness/core';

import { NurseryService } from '../../../services/nursery';
import { Nursery } from '../../../interfaces/nursery';

import { Observable } from 'rxjs/Observable';
import * as Joi from 'joi';

@Route({
    path: '/api/nurseries',
    method: 'GET',
    config: {
        response: {
            status: {
                200: Joi.array().items(
                    Joi.object().keys({
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
                        comments: Joi.array()

                    })
                ).unique('id').min(1)
            }
        },
        description: 'Get all nurseries',
        notes: 'Returns an array of nurseries or 204',
        tags: ['api', 'nurseries']
    }
})
export class GetAllNurseryRoute implements OnGet {
    /**
     * Class constructor
     * @param _nurseryService
     */
    constructor(private _nurseryService: NurseryService) {
    }

    /**
     * OnGet implementation
     * @param request
     */
    onGet(request: Request): Observable<Nursery[] | void> {
        return this._nurseryService.listAll();
    }
}
