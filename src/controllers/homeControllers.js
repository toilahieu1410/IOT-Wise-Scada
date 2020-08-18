import {home} from './../services/index';
import request from 'request';

let getHome = async (req, res) => {
        let getDiagram = await home.getDiagram();
        try {
            request(process.env.RQ_API_NODE_RED, {json: true}, function(error, response, body) {
                var getDataDiagram = body;
                return res.render('main/master', {
                    errors: req.flash('errors'),
                    success: req.flash('success'),
                    user: req.user.local.email,
                    getDiagram: getDiagram,
                    getDataDiagram: getDataDiagram
                })
            })
        } catch (error) {
            res.status(500).send(error);
        }
};

let getSetup = async(req, res) => {
    let getSetup = await home.getSetup();
    try {
        request(process.env.RQ_API_NODE_RED, {json: true}, function(error, response, body) {
            var getDataDiagram = body;
            return res.render('main/setup/setup', {
                user: req.user.local.email,
                getSetup: getSetup,
                getDataDiagram: getDataDiagram
            })
        })
    } catch (error) {
        res.status(500).send(error);
    }
};

let updateSetup = async(req, res) => {
    await home.updateSetup(req.params.id, req.body);
    return res.redirect('/setup')
};

let resetSetup = async(req, res) => {
    await home.resetSetup(req.params.id);
    return res.redirect('/setup');
}

module.exports = {
    getHome: getHome,
    getSetup: getSetup,
    updateSetup: updateSetup,
    resetSetup: resetSetup
};