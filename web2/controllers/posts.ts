const queries = require("./../graphql/queries")
require('dotenv').config()
import { GraphQLClient } from 'graphql-request'

function prepareLinks(data: [any]) {
    let linkarray = new Array();
    for(let i=0; i < data.length; i++) {
        linkarray.push(
            "https://quickhq.tech/p/" + data[i]["id"]
            )
    }
    return linkarray
}


module.exports = {
    getPosts: async (token: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await new GraphQLClient(process.env.ENDPOINT!, {headers: {authorization: token}})
                            .request(queries.getPosts)
                resolve({
                    data: data.getPosts, 
                    links: prepareLinks(data.getPosts)
                })
            } catch (e) {
                reject(e)
            }
        })
    },

    getSinglePost: async (token: any, id: string) => {
        return new Promise(async (resolve, reject) => {
            try {
                const variables = {
                    id: id
                }
                const data = await new GraphQLClient(process.env.ENDPOINT!, {headers: {authorization: token}})
                    .request(queries.getPost, variables)
                resolve({
                    data: data.getPost,
                })
            } catch (e) {
               reject(e)
            }
        })
    }
}