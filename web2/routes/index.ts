import Login from "./login";
import Dashboard from "./dashboard"
import Register from "./register"
import CreatePost from "./create";
const path = require("path")
import express from "express";
export default function Routes(app: express.Application) {

    // serve the landing page
    app.get('/', (_: express.Request, res: express.Response) => {res.sendFile(path.resolve('views/landing.html'))})

    // login routes
    Login(app); 

    //dashboard
    Dashboard(app);

    // registration
    Register(app);

    CreatePost(app);

    app.get('/success', (_: express.Request, res:express.Response) => {res.sendFile(path.resolve('views/success.html'))})
}