import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let SetupSchema = new Schema({
    namePLC: String,
    createdAt: Date,
    apSuatDungLo: Number,
    apSuatDungLo: Number,
    timeStartQuatHut: Number,
    timeStopQuatHut: Number,
    timeLuanPhienBom: Number,
    khoiLuongThanCongDon: Number,
    resetThanCongDon: Number,
});

module.exports = mongoose.model('setup', SetupSchema);