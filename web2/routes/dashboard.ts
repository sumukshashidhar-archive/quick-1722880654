const isAuth = require('../controllers/middleware/isAuth')
const postcon = require("./../controllers/posts")
import express from "express";
export default function Dashboard(app: express.Application) {

    app.get('/dashboard', isAuth, async (req: express.Request, res: express.Response) => {
        try {
            const data = await postcon.getPosts(req.cookies["Authorization"])
            if (data.length == 0) {
                res.send("no")
            } else {
                res.render('posts', {object: {
                    posts: data.data,
                    links: data.links
                }})
            }
        } catch (e) {
            console.log(e)
        }

    })

    app.get('/p/:id', isAuth, async  (req: express.Request, res: express.Response) => {
       try {
           const data = await postcon.getSinglePost(req.cookies['Authorization'], req.params.id)
           res.send(data)
       } catch (e) {
           res.send(e)
       }
    })

    app.get('/logout', async(_: express.Request, res: express.Response) => {
        res.clearCookie('Authorization')
        res.redirect('/')
    })
}