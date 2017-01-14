import * as mongoose from 'mongoose';
const url : string = 'mongodb://localhost:27017/dam';
const database = mongoose.connect(url);

export { database };