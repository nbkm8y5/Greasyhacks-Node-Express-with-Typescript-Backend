import * as mongoose from 'mongoose';
// Change to whatever the url is
//Assume this database does not have user authentication
const url : string = 'mongodb://localhost:27017/db';
const database = mongoose.connect(url);

export { database };