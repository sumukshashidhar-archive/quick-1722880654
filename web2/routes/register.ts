import { celebrate, Joi, Segments } from "celebrate";
import express from "express";
const path = require("path")
import RegisterController from "../controllers/register";
const isNoAuth = require("./../controllers/middleware/isNoAuth")

export default function Register(app: express.Application) {

    app.get('/register', isNoAuth, (_, res) => {
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
