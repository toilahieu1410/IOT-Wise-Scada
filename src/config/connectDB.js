import mongoose from 'mongoose';
import bluebird from 'bluebird';

// Connect to Mongodb
let connectDB = () => {
    mongoose.Promise = bluebird;

    let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_POST}/${process.env.DB_NAME}`;

    return mongoose.connect(URI, { useNewUrlParser: true });
};

module.exports = connectDB;