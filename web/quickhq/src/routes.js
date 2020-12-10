import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Land } from "./pages/land"
import {Login} from "./pages/Login"

export const Routes = () => {
    return (
        <>
            <BrowserRouter>
            <div>
            <Switch>
                <Route exact path="/" component = {Land} />
                <Route exact path="/login" component = {Login} />
            </Switch>
            </div>
            <Switch></Switch>
        </BrowserRouter>
        </>
    );
}