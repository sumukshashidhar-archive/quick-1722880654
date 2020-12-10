const queries = require("./../graphql/queries")
require('dotenv').config()
import { GraphQLClient } from 'graphql-request'

function prepareLinks(data) {
    let linkarray = new Array();
    for(let i=0; i < data.length; i++) {
        linkarray.push(
            "https://quickhq.tech/p/" + data[i]["id"]
            )
    }
    return linkarray
}


module.exports = {
    getPosts: async (token) => {
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
    }
}