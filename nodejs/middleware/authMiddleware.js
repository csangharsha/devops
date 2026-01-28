const protect = (req, res, next) => {
    if (!req.session || !req.session.user) {
        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized access'
        });
    }
    next();
};

module.exports = protect ;