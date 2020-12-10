import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ApolloProvider} from "@apollo/react-hooks"
import ApolloClient from 'apollo-boost';
import {Routes} from './routes'
import App from "./App2"

const client = new ApolloClient({
    uri: "https://backend.quickhq.tech/graphql"
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>,
  document.getElementById('root')
);