import {celebrate, Segments, Joi} from "celebrate";
import express from "express";

export default function CreatePost(app: express.Application) {



    app.get('/create', celebrate({
        [Segments.BODY]: Joi.object().keys({
            content: Joi.string().required(),
        })
    })), async (req: express.Request, res: express.Response) => {
        try {

        } catch (e) {

        }
    }
}