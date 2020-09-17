import request from 'request';
// import {pushSocketIdToArray, emitNotifyToArray, removeSocketIdFromArray} from '../../helpers/socketHelper';
let diagram = (io) => {
    io.on('connection', () => {
        setInterval(function () {
            request(process.env.RQ_API_NODE_RED, {json: true}, function(error, response, body) {
                let dataRequest = body;
                io.sockets.emit('requestApi', dataRequest);
            })
        }, 500)
        // socket.on('disconnect', () => {
        //     // Xoa socket khi tat may
        //     clients = removeSocketIdFromArray(clients, socket.request.user.id, socket);
        // })
    });

    
}

module.exports = diagram;