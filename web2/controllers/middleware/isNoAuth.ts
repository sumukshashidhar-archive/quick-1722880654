import express from "express";
const jwt = require("jsonwebtoken")

module.exports = async function (req: express.Request, res: express.Response, next: express.NextFunction) {

    if (req.cookies["Authorization"]) {
        try {
            const data = await jwt.decode(req.cookies["Authorization"].split(' ')[1])
            if(Date.now() >= data.exp * 1000) {
                next()
            }
            else {
                res.redirect('/dashboard')
            }
        } catch (e) {
            next()
        }
    }
    else {
        next()
    }
}