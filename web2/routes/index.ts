import Login from "./login";
import Dashboard from "./dashboard"
const path = require("path")
export default function Routes(app) {

    // serve the landing page
    app.get('/', (_, res) => {res.sendFile(path.resolve('views/landing.html'))})

    // login routes
    Login(app); 

    //dashboard
    Dashboard(app);

    app.get('/register', (_, res) => {res.sendFile(path.resolve('views/register.html'))})


    app.get('/posts', (_, res) => {res.render('posts.ejs', {object: {"posts": ["1", "2", "3"], "timestamps":[4, 5, 6], "edits":["7", "8", "9"]}})})
}