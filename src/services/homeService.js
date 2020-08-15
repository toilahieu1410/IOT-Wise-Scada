import DiagramModel from './../models/diagramModel';

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

module.exports = {
    getDiagram: getDiagram
}