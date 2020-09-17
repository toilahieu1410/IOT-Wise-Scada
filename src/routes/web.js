import express from 'express';
import passport from 'passport';
import {auth, home} from './../controllers/index';
import {authValid} from './../validation/index';
import initPassportLocal from './../controllers/passportController/local';

// init all passport
initPassportLocal();

//Init all passport

let router = express.Router();

//Init alii routes
let initRoutes = (app) => {
    router.get('/', auth.checkLoggedOut, auth.getLoginRegister);
    router.post('/register', auth.checkLoggedOut, authValid.register, auth.postRegister);
    router.post('/login', auth.checkLoggedOut, passport.authenticate('local', {
        successRedirect: '/homepage',
        failureRedirect: '/',
        successFlash: true,
        failureFlash: true
    }));

    router.get('/logout', auth.checkLoggedIn, auth.getLogout);
    router.get('/homepage', auth.checkLoggedIn, home.getHome);

    //Setup
    router.get('/setup', auth.checkLoggedIn, home.getSetup);
    router.post('/setup/plc_misubishi_1/updateValue/:id', auth.checkLoggedIn, home.updateSetup);
    router.post('/setup/plc_misubishi_1/resetValue/:id', auth.checkLoggedIn, home.resetSetup);
    
    //Chart
    router.get('/chart/query', auth.checkLoggedIn, home.queryDateTime);
    router.get('/chart', auth.checkLoggedIn, home.getDataChart );

    //Alarm
    router.get('/alarm/:page', auth.checkLoggedIn, home.getDataAlarm);
    router.get('/alarm/remove/:id', auth.checkLoggedIn, home.removeIdAlarm);
    router.post('/alarm/edit/:id', auth.checkLoggedIn, home.editIdAlarm);

    return app.use('/', router);
};

module.exports = initRoutes;