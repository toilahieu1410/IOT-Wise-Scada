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

module.exports = {
    register: register
};