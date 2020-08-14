import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let AlarmSchema = new Schema({
    namePLC: String,
    createdAt: Date,
    updatedAt: Date,
    lever: Number,
    alarm: String,
    tag: String,
    description: String,
    message: String
});

module.exports = mongoose.model('diagram', AlarmSchema);