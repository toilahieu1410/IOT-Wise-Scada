import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ChartSchema = new Schema({
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
    apSuatGio: Number,
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

ChartSchema.statics = {
    getDataChart(query) {
        return this.find({
            $and: [
                {'createdAt': {$gte: new Date(query.startDate), $lte: new Date(query.endDate)}}
            ]
        }, {
            _id: 1,
            createdAt: 1,
            nhietDoKhoiThai: 1,
            nhietDoNuoc: 1,
            apSuatHoi: 1,
            chanKhongBuongDot: 1,
            buongDot_TS1: 1,
            buongDot_TS2: 1,
            apSuatGio: 1
        }).exec();
    }
    
};

module.exports = mongoose.model('chart', ChartSchema);