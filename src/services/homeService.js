import DiagramModel from './../models/diagramModel';
import SetupModel from './../models/setupModel';
import ChartModel from './../models/chartModel';
import AlarmModel from './../models/alarmModel';
import { resolve, reject } from 'bluebird';

let getDiagram = () => {
    return new Promise( async (resolve, reject) => {
        try {
            let dataDiagram = await DiagramModel.findAllData();
            resolve(dataDiagram);
        } catch (error) {
            reject(error);
        }
    })
};

let getSetup = () => {
    return new Promise( async (resolve, reject) => {
        try {
            let dataSetup = await SetupModel.findAllSetup();
            resolve(dataSetup);
        } catch (error) {
            reject (error);
        }
    })
};

let updateSetup = (id, updateItem) => {
    return new Promise( async (resolve, reject) => {
        try {
            let updateSetup = await SetupModel.updateSetup(id, updateItem);
            resolve (updateSetup);
        } catch (error) {
            reject (error);
        }
    })
};

let resetSetup = (id) => {
    return new Promise (async (resolve, reject) => {
        try {
            let resetSetup = await SetupModel.resetSetup(id);
            resolve(resetSetup);
        } catch (error) {
            reject(error);
        }
    })
};

let getDataChart = (query) => {
    return new Promise (async (resolve, reject) => {
        try {
            let getDataChart = await ChartModel.getDataChart(query);
            resolve(getDataChart);
        } catch (error) {
            reject(error);
        }
    })
}

let getDataAlarm = () => {
    return new Promise( async(resolve, reject) => {
        try {
            let dataAlarm = await AlarmModel.findAllAlarm();

            resolve(dataAlarm);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getDiagram: getDiagram,
    getSetup: getSetup,
    updateSetup: updateSetup,
    resetSetup: resetSetup,
    getDataChart: getDataChart,
    getDataAlarm: getDataAlarm
}