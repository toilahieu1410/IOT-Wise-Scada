import {home} from './../services/index';
import request from 'request';
import MqttHandler from './../config/connectMQTT';
import moment from 'moment';
import _ from 'lodash';
import { body } from 'express-validator';

//Connect MQTT
let mqttClient = new MqttHandler();
mqttClient.connect();

let getHome = async (req, res) => {
        let getDiagram = await home.getDiagram();
        let getSetup = await home.getSetup();
        try {
                return res.render('main/diagram/diagram', {
                    errors: req.flash('errors'),
                    success: req.flash('success'),
                    user: req.user.local.email,
                    getDiagram: getDiagram,
                    getSetup: getSetup
                })
        } catch (error) {
            res.status(500).send(error);
        }
};

let getSetup = async(req, res) => {
    let getSetup = await home.getSetup();
    try {
            return res.render('main/setup/setup', {
                user: req.user.local.email,
            })
    } catch (error) {
        res.status(500).send(error);
    }
};

let updateSetup = async(req, res) => {
    await home.updateSetup(req.params.id, req.body);
    mqttClient.sendMessageSetup(JSON.stringify(req.body))
    return res.redirect('back')
};

let resetSetup = async(req, res) => {
    await home.resetSetup(req.params.id);
    mqttClient.sendMessageReset('0')
    return res.redirect('back');
};

let queryDateTime = async(req, res) => {
    return res.render('main/chart/queryDateTime', {
        user: req.user.local.email
    })
}

let getDataChart = async(req, res) => {
    let getDataChart = await home.getDataChart(req.query);
    let dateTime = [];
    let nhietDoKhoiThai = [];
    let nhietDoNuoc = [];
    let apSuatHoi = [];
    let chanKhongBuongDot = [];
    let buongDot_TS1 = [];
    let buongDot_TS2 = [];
    let apSuatGio = [];

    for(let i=0; i < getDataChart.length; i++) {
        let j = moment(getDataChart[i].createdAt).format('DD/MM-hh:mm a')
        dateTime.push(j);
        nhietDoKhoiThai.push(getDataChart[i].nhietDoKhoiThai);
        nhietDoNuoc.push(getDataChart[i].nhietDoNuoc);
        apSuatHoi.push(getDataChart[i].apSuatHoi);
        chanKhongBuongDot.push(getDataChart[i].chanKhongBuongDot);
        buongDot_TS1.push(getDataChart[i].buongDot_TS1);
        buongDot_TS2.push(getDataChart[i].buongDot_TS2);
        apSuatGio.push(getDataChart[i].apSuatGio);
    }

    let sumNhietDoKhoiThai = _.sum(nhietDoKhoiThai);
    let sumNhietDoNuoc = _.sum(nhietDoNuoc);
    let sumApSuatHoi = _.sum(apSuatHoi);
    return res.render('main/chart/chart', {
        user: req.user.local.email,
        getDataChart: getDataChart,
        nhietDoKhoiThai: nhietDoKhoiThai,
        nhietDoNuoc: nhietDoNuoc,
        apSuatHoi: apSuatHoi,
        chanKhongBuongDot: chanKhongBuongDot,
        buongDot_TS1: buongDot_TS1,
        buongDot_TS2: buongDot_TS2,
        apSuatGio: apSuatGio,
        sumNhietDoKhoiThai: sumNhietDoKhoiThai,
        sumNhietDoNuoc: sumNhietDoNuoc,
        sumApSuatHoi: sumApSuatHoi,
        dateTime: dateTime,
        moment: moment
    })
};

let getDataAlarm = async(req, res) => {
    let page = req.params.page
    let perPage = 10;
    let skip = ((perPage * page) - perPage);
    let getDataAlarm = await home.getDataAlarm(page, perPage, skip);
    let getCountAlarm = await home.getCountAlarm();
    return res.render('main/alarm/alarm', {
        user: req.user.local.email,
        getDataAlarm: getDataAlarm,
        getCountAlarm: getCountAlarm,
        pages: Math.ceil(getCountAlarm / perPage),
        current: page,
        moment: moment
    })
};

let removeIdAlarm = async(req, res) => {
    await home.removeIdAlarm(req.params.id);
    return res.redirect('back');
};

let editIdAlarm = async(req, res, next) => {
    await home.editIdAlarm(req.params.id, req.body.note, req.user);
    return res.redirect('back');
};

module.exports = {
    getHome: getHome,
    getSetup: getSetup,
    updateSetup: updateSetup,
    resetSetup: resetSetup,
    queryDateTime: queryDateTime,
    getDataChart: getDataChart,
    getDataAlarm: getDataAlarm,
    removeIdAlarm: removeIdAlarm,
    editIdAlarm: editIdAlarm
};