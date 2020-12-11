import { celebrate, Joi, Segments } from "celebrate";
import express from "express";
const path = require("path")
import RegisterController from "../controllers/register";
const jwt = require("jsonwebtoken")

async function checkerToken(req: express.Request, res: express.Response, next:express.NextFunction) {
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

export default function Register(app: express.Application) {

    app.get('/register', checkerToken, (_, res) => {
        res.sendFile(path.resolve('views/register.html'))
    })

    app.post('/register', celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required(),
        })
    }), async (req, res) => {
        try {
            const response = await RegisterController(req.body.email, req.body.password);
            if(response) {
                res.redirect('/login')
            } else {
                res.redirect('/failure')
            }
        } catch (e) {
            res.redirect('/failure')
        }
    })
}
