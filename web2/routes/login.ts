import { celebrate, Joi, Segments } from "celebrate";
import express from "express";
const path = require("path")
import LoginController from "./../controllers/login"
const jwt = require("jsonwebtoken")

async function checkerToken(req: express.Request, res: express.Response, next: express.NextFunction) {
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


export default function Login(app: express.Application) {

    app.get('/login', checkerToken, (_, res) => {
        res.sendFile(path.resolve('views/login.html'))
    })

    app.post('/login', (celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    })),async (req, res) => {
        try {
            const token = await LoginController(req.body.email, req.body.password);
            res.cookie('Authorization', "Bearer " + token)
            res.redirect('/dashboard')
        } catch (err) {
            res.redirect('/login')
        }

    })
}
