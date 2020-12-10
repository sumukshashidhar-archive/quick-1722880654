require('dotenv').config()
const queries = require("./../graphql/queries")
import { GraphQLClient, gql } from 'graphql-request'

export default async function RegisterController(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            let loginMutation = queries.login;
            let variables = {
                email: email,
                password: password
            }
    
            const data = await new GraphQLClient(process.env.ENDPOINT)
                            .request(loginMutation, variables)

            resolve(data.login.accessToken)
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}