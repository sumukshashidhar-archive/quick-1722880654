const isAuth = require('../controllers/middleware/isAuth')


export default function Dashboard(app) {

    app.get('/dashboard', isAuth, (req, res) => {
        res.send("ok")
    })
}