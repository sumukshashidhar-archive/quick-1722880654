import { celebrate, Joi, Segments } from "celebrate";
const path = require("path")
import LoginController from "./../controllers/login"

export default function Login(app) {

    app.get('/login', (_, res) => {
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
