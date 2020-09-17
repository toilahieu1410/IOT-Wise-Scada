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
    findAllAlarm(page, perPage, skip) {
        return this.find({})
        .sort({_id: -1})
        .skip(skip)
        .limit(perPage)
        .exec()
    },
    
    getCountAlarm() {
        return this.count({}).exec()
    },

    removeIdAlarm(id) {
        return  this.findByIdAndRemove(id).exec()
    }
}

module.exports = mongoose.model('alarm', AlarmSchema);