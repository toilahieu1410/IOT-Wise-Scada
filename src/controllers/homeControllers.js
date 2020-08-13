let getHome = (req, res) => {
    return res.render('main/master', {
        errors: req.flash('errors'),
        success: req.flash('success')
    });
};

module.exports = {
    getHome: getHome
};