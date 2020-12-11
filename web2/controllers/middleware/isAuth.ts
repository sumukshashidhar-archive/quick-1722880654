const jwt = require("jsonwebtoken")
import express from "express";
module.exports = async function(req: express.Request, res: express.Response, next: express.NextFunction) {
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
