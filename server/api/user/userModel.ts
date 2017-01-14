/**
 * User Model
 */
import { database } from '../../config/db';

let Schema = database.Schema;
let UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    role: String,
    emailVerified: Boolean,
    status: String,
    created: Date,
    lastUpdated: String
});

let userModel = database.model('user', UserSchema);


export { userModel };