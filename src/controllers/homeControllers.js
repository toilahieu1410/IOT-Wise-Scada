import {home} from './../services/index';
import request from 'request';

let getHome = async (req, res) => {

        var getDiagram = await home.getDiagram();
        
        try {
            request('http://10.10.11.222:1880/diagram_plc_mitsubishi', {json: true}, function(error, response, body) {
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
        // console.log(getDataDiagram.nhietDoKhoiThai);
        // return res.render('main/master', {
        //     errors: req.flash('errors'),
        //     success: req.flash('success'),
        //     user: req.user.local.email,
        //     getDiagram: getDiagram,
        //     getDataDiagram: getDataDiagram
        // });
};

module.exports = {
    getHome: getHome
};