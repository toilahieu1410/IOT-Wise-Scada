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
    router.get('/', auth.getLoginRegister);
    router.post('/register', authValid.register, auth.postRegister);
    router.post('/login', passport.authenticate('local', {
        successRedirect: '/homepage',
        failureRedirect: '/',
        successFlash: true,
        failureFlash: true
    }));

    router.get('/homepage', auth.checkLoggedIn, home.getHome)

    return app.use('/', router);
};

module.exports = initRoutes;