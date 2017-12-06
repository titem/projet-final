import { HapinessModule, HttpServerService, OnError, OnStart } from '@hapiness/core';
import { LoggerModule, LoggerService } from '@hapiness/logger';
import { SwagModule } from '@hapiness/swag';
import { Config } from '@hapiness/config';
import { MongoClientService, MongoModule } from '@hapiness/mongo';
import { Observable } from 'rxjs/Observable';
import {
    GetOneUserRoute,
    PostCreateUserRoute,
    GetAllNurseryRoute,
    GetOneNurseryRoute,
    PostCreateNurseryRoute,
    PutUpdateNurseryRoute,
    DeleteOneNurseryRoute,
    PostCreateNurseryCommentRoute,
    DeleteOneNurseryCommentRoute
} from './routes';
import {
    PeopleDocumentService,
    PeopleService,
    UserDocumentService,
    UserService,
    NurseryDocumentService,
    NurseryService
} from './services';
import { UserModel, NurseryModel } from './models';



// factories to declare dependency between DocumentService and MongoClientService
// we use it to be sure that MongoClientService will be loaded before DocumentService
const peopleDocumentFactory = (mongoClientService: MongoClientService) => new PeopleDocumentService(mongoClientService);
const userDocumentFactory = (mongoClientService: MongoClientService) => new UserDocumentService(mongoClientService);
const nurseryDocumentFactory = (mongoClientService: MongoClientService) => new NurseryDocumentService(mongoClientService);

@HapinessModule({
    version: '1.0.0',
    imports: [
        LoggerModule,
        SwagModule.setConfig(Config.get('swag')),
        MongoModule
    ],
    declarations: [
        GetOneUserRoute, PostCreateUserRoute,
        UserModel,
        GetAllNurseryRoute, GetOneNurseryRoute, PostCreateNurseryRoute, PutUpdateNurseryRoute, DeleteOneNurseryRoute,
        PostCreateNurseryCommentRoute, DeleteOneNurseryCommentRoute,
        NurseryModel
    ],
    providers: [
        HttpServerService,
        PeopleService,
        UserService,
        NurseryService,
        { provide: PeopleDocumentService, useFactory: peopleDocumentFactory, deps: [MongoClientService] },
        { provide: UserDocumentService, useFactory: userDocumentFactory, deps: [MongoClientService] },
        { provide: NurseryDocumentService, useFactory: nurseryDocumentFactory, deps: [MongoClientService] }
    ]
})
export class ApplicationModule implements OnStart, OnError {
    /**
     * Class constructor
     *
     * @param {HttpServerService} _httpServer wrapper for instance of original Hapi server
     * @param {LoggerService} _logger
     */
    constructor(private _httpServer: HttpServerService, private _logger: LoggerService) {
    }

    /**
     * On start process
     *
     * @return {void | Observable<any>}
     */
    onStart(): void | Observable<any> {
        this._logger.info(`< Application.bootstrap > Server started at: ${this._httpServer.instance().info.uri}`);
    }

    /**
     * On error process
     *
     * @param {Error} error
     * @param data
     *
     * @return {void | Observable<any>}
     */
    onError(error: Error, data?: any): void | Observable<any> {
        this._logger.error('A problem occurred during application\'s lifecycle');
        this._logger.error(error.message);
    }
}
