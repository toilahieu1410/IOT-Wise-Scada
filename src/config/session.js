import session from 'express-session';
import connectMongo from 'connect-mongo';

let MongoStore = connectMongo(session);

// this variable is where save session, in this case is mongodb
let sessionStore = new MongoStore({
    url: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_POST}/${process.env.DB_NAME}`,
    autoReconnect: true
    // autoRemove: 'native'
});

let config = (app) => {
    app.use(session({
        key: process.env.SESSION_KEY,
        secret: process.env.SESSION_SECRET,
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24     // 1 day
        }
    }))
};

module.exports = {
    config: config,
    sessionStore: sessionStore
};