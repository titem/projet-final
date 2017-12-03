import { Injectable } from '@hapiness/core';
import { NurseryDocumentService } from '../nursery-document';

import { Nursery } from '../../interfaces/nursery';
import { AbstractService } from '../abstract';

@Injectable()
export class NurseryService extends AbstractService<Nursery> {
    /**
     * Class constructor
     */
    constructor(_nurseryDocumentService: NurseryDocumentService) {
        super(_nurseryDocumentService, 'Nursery');
    }
}
