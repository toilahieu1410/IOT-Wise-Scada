import express from 'express';
import passport from 'passport';
import {auth} from './../controllers/index';
import {authValid} from './../validation/index';

//Init all passport

let router = express.Router();

//Init alii routes
let initRoutes = (app) => {
    router.get('/', auth.getLoginRegister);
    router.post('/register', authValid.register, auth.postRegister);

    return app.use('/', router);
};

module.exports = initRoutes;