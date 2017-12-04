import { Model, MongoClientService, MongoModel } from '@hapiness/mongo';
import { Config } from '@hapiness/config';
import { Schema } from 'mongoose';

@MongoModel({
    adapter: 'mongoose',
    collection: 'nurseries',
    options: Config.get('mongodb')
})
export class NurseryModel extends Model {
    // property to store schema
    readonly schema: any;

    /**
     * Class constructor
     *
     * @param {MongoClientService} _mongoClientService
     */
    constructor(private _mongoClientService: MongoClientService) {
        // call parent constructor
        super(NurseryModel);

        // get dao
        const dao = this._mongoClientService.getDao(this.connectionOptions);

        // create schema
        this.schema = new dao.Schema({
            name: {
                type: String,
                required: true
            },
            email: String,
            tel: String,
            website: String,
            address: {
                street: {
                    type: String,
                    required: true
                },
                postalCode: {
                    type: Number,
                    required: true
                },
                city: {
                    type: String,
                    required: true
                }
            },
            description: String,
            staffNumber: Number,
            openingHours: String,
            admissionConditions: String,
            capacity: Number,
            ageLimits: String,
            comments: [{
                user: { type: Schema.Types.ObjectId, ref: 'users' },
                rating: {
                    type: Number,
                    required: true
                },
                text: {
                    type: String,
                    required: true
                }
            }]
        }, {
            versionKey: false
        });

        // implement virtual method toJSON to delete _id field
        this.schema.set('toJSON', {
                virtuals: true,
                transform: function (doc, ret) {
                    delete ret._id;
                    ret.comments.forEach(v => {
                        v.id = v._id.toHexString();
                        delete v._id }
                    );
                    return ret;
                }
            }
        );
    }
}
