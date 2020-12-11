import {celebrate, Segments, Joi} from "celebrate";
import express from "express";
import PostController from "../controllers/createPostController";
import path from "path";

export default function CreatePost(app: express.Application) {

    app.get('/create', function (_, res){
        res.sendFile(path.resolve('views/create.html'))
    })

    app.post('/create', celebrate({
        [Segments.BODY]: Joi.object().keys({
            content: Joi.string().required(),
        })
    }), async (req: express.Request, res: express.Response) => {
        try {
            const response = await PostController(req.body.content, req.cookies.Authorization)
            if(response) {
                res.redirect('/success')
            } else {
                res.redirect('/failure')
            }
        } catch (e) {

        }
    })
}