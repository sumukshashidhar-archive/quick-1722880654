import { celebrate, Joi, Segments } from "celebrate";
const path = require("path")
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

export default function Register(app) {

    app.get('/register', checkerToken, (_, res) => {
        res.sendFile(path.resolve('views/register.html'))
    })

    app.post('/login', (celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    })),async (_, res) => {
        res.send("ok")

    })
}
