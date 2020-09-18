import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import passport from 'passport';

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    role: {type: String, default: 'User'},
    local: {
        email: {type: String, trim: true},
        password: String,
        isActive: {type: Boolean, default: true},
        position: String,
        phone: String
    },
    createdAt: {type: Number, default: Date.now},
    updatedAt: {type: Number, default: null},
    deletedAt: {type: Number, default: null}
});

UserSchema.statics = {
    createNew(item) {
        return this.create(item);
    },

    findByEmail(email) {
        return this.findOne({'local.email': email}).exec();
    },

    findUserById(id) {
        return this.findById(id).exec();
    },

    findAllUser() {
        return this.find({}, {username: 1, role: 1, local:1 }).exec();
    },

    editIdUser(id, body) {
        return this.findByIdAndUpdate(id, 
            {'username': body.username,
             'local.position': body.position,
             'local.phone': body.phone,
             'role': body.role
            }
            ).exec();
    },

    removeIdUser(id) {
        return this.findByIdAndRemove(id).exec();
    }

};

UserSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.local.password);
    }
};

module.exports = mongoose.model('user', UserSchema);