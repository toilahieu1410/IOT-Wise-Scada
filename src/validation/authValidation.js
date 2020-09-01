import {check} from 'express-validator';
import {transValidation} from './../../lang/vi';

let register = [
    check('mail', transValidation.email_incorrect)
        .trim(),
    check('password', transValidation.password_incorrect)
        .isLength({min: 5}),
    check('password_confirmation', transValidation.password_confirmation_incorrect)
        .custom((value, {req}) => {
            return value === req.body.password
        })
];

module.exports = {
    register: register
}