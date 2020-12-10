const path = require("path")
export default function Routes(app) {

    app.get('/', (_, res) => {res.sendFile(path.resolve('views/landing.html'))})
    app.get('/login', (_, res) => {res.sendFile(path.resolve('views/login.html'))})
    app.get('/posts', (_, res) => {res.render('posts.ejs', {object: {"posts": ["1", "2", "3"], "timestamps":[4, 5, 6], "edits":["7", "8", "9"]}})})
}