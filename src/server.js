import express from 'express';
import cookieParser from 'cookie-parser';
import configViewEngine from './config/viewEngine';
import ConnectDB from './config/connectDB';
import initRoutes from './routes/web';
import bodyParser from 'body-parser';
import connectFlash from 'connect-flash';
import configSession from './config/session'
import passport from 'passport';

let app = express();

//Connect Mongodb
ConnectDB();

//Config Session
configSession(app);

//Config View Engine
configViewEngine(app);

//Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

//Enable Flash message
app.use(connectFlash());

//Config Passport js
app.use(passport.initialize());
app.use(passport.session());

//Init all routes
initRoutes(app);

//Use cookie parser
app.use(cookieParser());

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log('Server is running: ' + process.env.APP_PORT);
})