const isAuth = require('../controllers/middleware/isAuth')
const postcon = require("./../controllers/posts")

export default function Dashboard(app) {

    app.get('/dashboard', isAuth, async (req, res) => {
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

            console.log(data)
        } catch (e) {
            console.log(e)
        }

    })

    app.get('/logout', async(req, res) => {
        res.clearCookie('Authorization')
        res.redirect('/')
    })
}