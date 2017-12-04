import { OnDelete, Request, Route } from '@hapiness/core';

import { NurseryService } from '../../../services/nursery';

import { Observable } from 'rxjs/Observable';
import * as Joi from 'joi';

@Route({
    path: '/api/nurseries/{id}',
    method: 'DELETE',
    config: {
        validate: {
            params: {
                id: Joi.string().required()
            }
        },
        description: 'Delete one nursery',
        notes: 'Delete one nursery for the given id in path parameter',
        tags: ['api', 'nurseries']
    }
})
export class DeleteOneNurseryRoute implements OnDelete {
    /**
     * Class constructor
     * @param _nurseryService
     */
    constructor(private _nurseryService: NurseryService) {
    }

    /**
     * OnDelete implementation
     * @param request
     */
    onDelete(request: Request): Observable<void> {
        return this._nurseryService.delete(request.params.id);
    }
}
