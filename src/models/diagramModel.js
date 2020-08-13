import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let DiagramSchema = new Schema({
    namePLC: String,
    createdAt: Date,
    nhietDoKhoiThai: Number,
    beChuaNuoc: Number,
    statusBomDapBui: Boolean,
    statusBom_1: Boolean,
    statusBom_2: Boolean,
    quatHut: Number,
    nhietDoNuoc: Number,
    apSuatHoi: Number,
    boHamNuoc: Number,
    chanKhongBuongDot: Number,
    buongDot_TS1: Number,
    buongDot_TS2: Number,
    quatDay: Number,
    bangTai_1: Number,
    bangTai_2: Number,
    statusBangTai_1: Boolean,
    statusBangTai_2: Boolean,
    statusQuatDay: Boolean,
    statusQuatOxy: Boolean,
    statusQuatHut: Boolean,
    luuLuongTucThoi: Number,
    khoiLuongThanTucThoi: Number,
    khoiLuongThanCongDon: Number

});

module.exports = mongoose.model('diagram', DiagramSchema);