import {GraphQLClient} from "graphql-request";

const queries = require("./../graphql/queries")

export default async function PostController(content: String, token: any) {
    return new Promise(async (resolve, reject) => {
        try {
            let postMutation = queries.makePost;
            let variables = {
                content: content
            }

            const data = await new GraphQLClient(process.env.ENDPOINT!, {headers: {authorization: token}})
                .request(postMutation, variables)

            resolve(data.makePost)
        } catch (e) {
           reject(e)
        }
    })
}