import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Land } from "./pages/land"
import {Login} from "./pages/Login"
import {Dashboard} from "./pages/dashboard"
import {LoginComponent} from "./Login"
import {ApolloProvider} from "@apollo/react-hooks"
import ApolloClient from 'apollo-boost'
import {App} from "./App2"

export const Routes = () => {
    const client = new ApolloClient({
        uri: "https://backend.quickhq.tech/graphql"
    })
    return (
        <>
            <BrowserRouter>
            <div>
            <Switch>
                <Route exact path="/" component = {Land} />
                <Route exact path="/login" component = {Login} />
                <Route exact path="/dashboard" component = {Dashboard} />
                <Route exact path="/test1" component={App} />
                <Route exact path="/test2" component={LoginComponent} />

            </Switch>
            </div>
            <Switch></Switch>
        </BrowserRouter>
        </>
    );
}