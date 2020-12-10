import { celebrate, Joi, Segments } from "celebrate";
const path = require("path")
import LoginController from "./../controllers/login"
const jwt = require("jsonwebtoken")

async function checkerToken(req, res, next) {
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


export default function Login(app) {

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
