import UserModel from './../models/userModel';
import bcrypt from 'bcrypt';
import { reject, resolve } from 'bluebird';
import {transErrors, transSuccess} from './../../lang/vi';

let saltRounds = 7;

let register = (email, password) => {
    return new Promise( async (resolve, reject) => {
        let userByEmail = await UserModel.findByEmail(email);
        if (userByEmail) {
            if(userByEmail.deletedAt != null){
                return reject(transErrors.account_removed)
            }
            return reject(transErrors.account_in_use)
        }
        let salt = bcrypt.genSaltSync(saltRounds);
    
        let userItem = {
            username: email.split('@')[0],
            local: {
                email: email,
                password: bcrypt.hashSync(password, salt)
            }
        };
    
        let user = await UserModel.createNew(userItem);
        resolve(transSuccess.userCreated(user.local.email));
    });
    
};

let getDataSetting = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let getDataSetting = await UserModel.findAllUser();
            resolve (getDataSetting);
        } catch (error) {
            reject (error);
        }
    })
};

let editIdUser = (id, body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let editIdUser = await UserModel.editIdUser(id, body);
            resolve(editIdUser);
        } catch (error) {
            reject (error);
        }
    })
};

let removeIdUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let removeIdUser = await UserModel.removeIdUser(id);
            resolve(removeIdUser);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    register: register,
    getDataSetting: getDataSetting,
    editIdUser: editIdUser,
    removeIdUser: removeIdUser
};