import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let SetupSchema = new Schema({
    namePLC: String,
    createdAt: Date,
    apSuatChayLo: Number,
    apSuatDungLo: Number,
    timeStartQuatHut: Number,
    timeStopQuatHut: Number,
    timeLuanPhienBom: Number,
    khoiLuongThanCongDon: Number,
    resetThanCongDon: Number,
});

SetupSchema.statics = {
    findAllSetup() {
        return this.find({}).exec();
    },

    updateSetup(id, updateItem) {
        return this.findByIdAndUpdate(id, updateItem).exec();
        // return this.findByIdAndUpdate( id,
        //     {'apSuatChayLo': updateItem.apSuatChayLo,
        //     'apSuatDungLo': updateItem.apSuatDungLo,
        //     'timeStartQuatHut': updateItem.timeStartQuatHut,
        //     'timeStopQuatHut': updateItem.timeStopQuatHut,
        //     'timeLuanPhienBom': updateItem.timeLuanPhienBom,
        //     'khoiLuongThanCongDon': updateItem.khoiLuongThanCongDon}
        // ).exec();
    },

    resetSetup(id) {
        return this.findByIdAndUpdate(id,
            {'resetThanCongDon': 0}
            ).exec();
    },

}

module.exports = mongoose.model('setup', SetupSchema);