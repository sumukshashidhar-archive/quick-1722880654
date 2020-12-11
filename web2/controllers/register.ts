require('dotenv').config()
const queries = require("./../graphql/queries")
import { GraphQLClient} from 'graphql-request'

export default async function RegisterController(email: String, password:String) {
    return new Promise(async (resolve, reject) => {
        try {
            let registerMutation = queries.register;
            let variables = {
                email: email,
                password: password
            }
    
            const data = await new GraphQLClient(process.env.ENDPOINT!)
                            .request(registerMutation, variables)

            resolve(data.register)
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}