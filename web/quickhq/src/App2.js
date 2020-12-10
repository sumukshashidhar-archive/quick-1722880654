import React from 'react';
import {useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

export function App() {
    const {data, loading} = useQuery(gql`
        {
            hello
        }
    
    `);

    if(loading || !data) {
        return <div>Loading..</div>
    }
    
    return <div>{JSON.stringify(data)}</div>
}