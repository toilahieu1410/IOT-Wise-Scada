import diagram from './diagram/diagram';

let initSockets = (io) => {
    diagram(io);
}

module.exports = initSockets;