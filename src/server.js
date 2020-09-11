import express from 'express';
import cookieParser from 'cookie-parser';
import configViewEngine from './config/viewEngine';
import ConnectDB from './config/connectDB';
import initRoutes from './routes/web';
import bodyParser from 'body-parser';
import connectFlash from 'connect-flash';
import configSession from './config/session'
import passport from 'passport';
import http, { createServer } from 'http';
import socket_io from 'socket.io';
// import MqttHandler from './config/connectMQTT/mqtt-server';

let app = express();

// Init server with socket.io & express app
let server = http.createServer(app);
let io = socket_io(server);

//Connect Mongodb
ConnectDB();

//Connect MQTT
// let mqttClient = new MqttHandler();
// mqttClient.connect(app);

//Config Session
configSession(app);

//Config View Engine
configViewEngine(app);

//Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + 'src/public'));

//Enable Flash message
app.use(connectFlash());

//Config Passport js
app.use(passport.initialize());
app.use(passport.session());

//Init all routes
initRoutes(app);

//Use cookie parser
app.use(cookieParser());

server.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log('Server is running: ' + process.env.APP_PORT);
})