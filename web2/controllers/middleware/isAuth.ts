module.exports = function(req, res, next) {
    console.log(req.cookies)
    next()
}
