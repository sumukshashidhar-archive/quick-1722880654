
import { gql } from 'graphql-request'

const LoginMutation = gql`
mutation Login($email: String!, $password: String!) {

    login(email: $email, password: $password) {
        accessToken
    }
}
`

const RegisterMutation = gql`
mutation Register($email: String!, $password: String!) {

    register(email: $email, password: $password)
}
`




const PostMaker = gql`
mutation makePost($content: String!) {
    makePost(content: $content)
}
`

const getPostsForUser = gql`
{
    getPosts {
        id
        timestamp
        content
    }
}

`



module.exports = {


    login: LoginMutation,
    makePost: PostMaker,
    getPosts: getPostsForUser,
    register: RegisterMutation

}