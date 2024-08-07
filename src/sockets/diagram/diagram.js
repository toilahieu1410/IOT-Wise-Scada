import {home} from '../../controllers/index';
import request from 'request';
import {pushSocketIdToArray, emitNotifyToArray, removeSocketIdFromArray} from '../../helpers/socketHelper';
import MqttHandler from '../../config/connectMQTT';

let mqttClient = new MqttHandler();
mqttClient.connect();

let diagram = (io) => {
    // let clients = {};
    io.on('connection', (socket) => {
        setInterval(function () {
            request(process.env.RQ_API_NODE_RED, {json: true}, function(error, response, body) {
                let dataRequest = body;
                if(typeof dataRequest === 'undefined'){
                    return;
                } else {
                    io.sockets.emit('requestApi', dataRequest);
                }
        
            })
        }, 500);

        socket.on('qh1', function(data){
            mqttClient.controlQuatOxy(JSON.stringify(data))
        })

        // socket.on('disconnect', () => {
        //     // Xoa socket khi tat may
        //     clients = removeSocketIdFromArray(clients, socket.request.user.id, socket);
        // })
    });

    
}

module.exports = diagram;