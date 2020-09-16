import request from 'request';

let diagram = (io) => {
    io.on('connection', () => {
        setInterval(function () {
            request(process.env.RQ_API_NODE_RED, {json: true}, function(error, response, body) {
                let dataRequest = body;
                io.sockets.emit('requestApi', dataRequest);
            })
        }, 500)
        
    });
}

module.exports = diagram;