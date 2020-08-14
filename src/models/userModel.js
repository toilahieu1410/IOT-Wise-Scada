import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import passport from 'passport';

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    role: {type: String, default: 'user'},
    local: {
        email: {type: String, trim: true},
        password: String,
        isActive: {type: Boolean, default: true}
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
    }
};

UserSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.local.password);
    }
};

module.exports = mongoose.model('user', UserSchema);