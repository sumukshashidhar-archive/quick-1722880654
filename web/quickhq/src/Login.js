import React from "react-router-dom"
import { useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
export function LoginComponent() {
  const {loading, data} = useMutation(gql`
  mutation Login($email: String!, $password: String!){
  login(password: "password", email: "email") {
    accessToken
  }
}
  
  `);
  console.log("Function Runs")
  console.log(data)
  if (loading || !data) {
    return <div>Loading..</div>;
  }
  console.log(data)
  return <div>{JSON.stringify(data)}</div>;
}
