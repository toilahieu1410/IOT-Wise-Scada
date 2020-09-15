import {home} from './../services/index';
import request from 'request';
import MqttHandler from './../config/connectMQTT';
import moment from 'moment';
//Connect MQTT
let mqttClient = new MqttHandler();
mqttClient.connect();

let getHome = async (req, res) => {
        let getDiagram = await home.getDiagram();
        let getSetup = await home.getSetup();
        try {
            request(process.env.RQ_API_NODE_RED, {json: true}, function(error, response, body) {
                let getDataDiagram = body;
                return res.render('main/diagram/diagram', {
                    errors: req.flash('errors'),
                    success: req.flash('success'),
                    user: req.user.local.email,
                    getDiagram: getDiagram,
                    getSetup: getSetup,
                    getDataDiagram: getDataDiagram
                })
            })
        } catch (error) {
            res.status(500).send(error);
        }
};

let getSetup = async(req, res) => {
    let getSetup = await home.getSetup();
    try {
        request(process.env.RQ_API_NODE_RED, {json: true}, function(error, response, body) {
            let getDataDiagram = body;
            return res.render('main/setup/setup', {
                user: req.user.local.email,
                getSetup: getSetup,
                getDataDiagram: getDataDiagram
            })
        })
    } catch (error) {
        res.status(500).send(error);
    }
};

let updateSetup = async(req, res) => {
    await home.updateSetup(req.params.id, req.body);
    mqttClient.sendMessageSetup(JSON.stringify(req.body))
    return res.redirect('/homepage')
};

let resetSetup = async(req, res) => {
    await home.resetSetup(req.params.id);
    mqttClient.sendMessageReset('0')
    return res.redirect('/homepage');
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
    return res.render('main/chart/chart', {
        user: req.user.local.email,
        nhietDoKhoiThai: nhietDoKhoiThai,
        nhietDoNuoc: nhietDoNuoc,
        apSuatHoi: apSuatHoi,
        chanKhongBuongDot: chanKhongBuongDot,
        buongDot_TS1: buongDot_TS1,
        buongDot_TS2: buongDot_TS2,
        apSuatGio: apSuatGio,
        dateTime: dateTime
    })
};

let getDataAlarm = async(req, res) => {
    return res.render('main/alarm/alarm', {
        user: req.user.local.email
    })
}

module.exports = {
    getHome: getHome,
    getSetup: getSetup,
    updateSetup: updateSetup,
    resetSetup: resetSetup,
    queryDateTime: queryDateTime,
    getDataChart: getDataChart,
    getDataAlarm: getDataAlarm
};