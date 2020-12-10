const jwt = require("jsonwebtoken")
module.exports = async function(req, res, next) {
    if (req.cookies["Authorization"]) {
        try {
            const data = await jwt.decode(req.cookies["Authorization"].split(' ')[1])
            if(Date.now() >= data.exp * 1000) {
                res.redirect('/login')
            }
            else {
                next()
            }
        } catch (e) {
            res.redirect('/login')
            
        }
    }
    else {
        res.redirect('/login')
    }
}
