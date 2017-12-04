import { OnDelete, Request, Route } from '@hapiness/core';

import { NurseryService } from '../../../../services/nursery';

import { Observable } from 'rxjs/Observable';
import * as Joi from 'joi';

@Route({
    path: '/api/nurseries/{id}/comments/{commentId}',
    method: 'DELETE',
    config: {
        validate: {
            params: {
                id: Joi.string().required(),
                commentId: Joi.string().required()
            }
        },
        description: 'Delete one comment',
        notes: 'Delete one comment for the given id in path parameter',
        tags: ['api', 'nurseries', 'comments']
    }
})
export class DeleteOneNurseryCommentRoute implements OnDelete {
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
        return this._nurseryService.deleteComment(request.params.id, request.params.commentId);
    }
}
