import {validationResult} from 'express-validator';
import {auth} from './../services/index';
import {transSuccess} from './../../lang/vi';

let  getLoginRegister = (req, res) => {
    return res.render('auth/master', {
        errors: req.flash('errors'),
        success: req.flash('success')
    });
 };

let postRegister = async (req, res) => {
    let errorArr = [];
    let successArr = [];

    let validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => {
            errorArr.push(item.msg);
        });
        req.flash('errors', errorArr)
        return res.redirect('back')
    }

    try {
        let createUserSuccess = await auth.register(req.body.email, req.body.password);
        successArr.push(createUserSuccess);
        // req.flash('success', successArr);
            return res.redirect('back');
    } catch (error) {
        errorArr.push(error);
        // req.flash('errors', errorArr);
            return res.redirect('back');
    }
    
};

let checkLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if(req.isAuthenticated()) {
        return res.redirect('/homepage');
    }
    next();
};

let getLogout = (req, res) => {
    req.logout(); // remove session passport user
    req.flash('success', transSuccess.logout_success);
    return res.redirect('/');
};

let getDataSetting = async(req, res, next) => {
    let getDataSetting = await auth.getDataSetting();
    return res.render('main/setup/setup', {
        user: req.user.local.email,
        getDataSetting: getDataSetting
    })
};

let editIdUser = async(req, res, next) => {
    await auth.editIdUser(req.params.id, req.body);
    return res.redirect('back');
};

let removeIdUser = async(req, res, next) => {
    await auth.removeIdUser(req.params.id);
    return res.redirect('back');
}

 module.exports =  {
    getLoginRegister: getLoginRegister,
    postRegister: postRegister,
    checkLoggedIn: checkLoggedIn,
    getLogout: getLogout,
    checkLoggedOut: checkLoggedOut,
    getDataSetting:getDataSetting,
    editIdUser: editIdUser,
    removeIdUser: removeIdUser
 };