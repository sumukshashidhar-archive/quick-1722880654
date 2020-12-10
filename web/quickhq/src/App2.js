import React from 'react';
import {useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const App = () => {
    const {data, loading} = useQuery(gql`
        {
            hello
        }
    
    `);

    if(loading) {
        return <div>Loading..</div>
    }
    
    return <div>{JSON.stringify(data)}</div>
}

export default App