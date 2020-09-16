import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let AlarmSchema = new Schema({
    device: String,
    type: String,
    value: Number,
    createdAt: Date,
    updatedAt: Date,
    userId: String,
    isDone: Boolean,
    note: String
});

AlarmSchema.statics = {
    findAllAlarm() {
        return this.find({}).exec();
    }
}

module.exports = mongoose.model('alarm', AlarmSchema);