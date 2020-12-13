// for types and compilation
import {Arg, Ctx, Mutation, Query, Resolver, UseMiddleware} from "type-graphql";
import {MyContext} from "./MyContext";

// Middleware to check user authentication
import {isAuth} from "./isAuth";


// entities
import {User} from "./entity/User";
import {Post} from "./entity/Post";


// resolvers
@Resolver()
export class PostResolver {

    @Query(() => Post)
    @UseMiddleware(isAuth)
    async getPost(@Ctx() { payload }: MyContext, @Arg("id") id: string) {
        return await Post.findOne({where: {user: payload!.userId, id: id}})
    }

    /**
     * Resolver to get all posts for a given user
     * 
     */
    @Query(() => [Post])
    @UseMiddleware(isAuth)
    async getPosts(@Ctx() { payload }: MyContext) {
        return await Post.find({where: {user: payload!.userId}, order: {timestamp: "DESC"}})
    }

    /**
     * Resolver to make a post for a given user
     * 
     */

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async makePost(
        @Ctx() { payload }: MyContext,
        @Arg("content") content: string
    ) {
        try {
            await Post.insert({
                timestamp: new Date().getTime(),
                content: content,
                user: await User.findOne({where: {id: payload!.userId}})
            })

            return true;

        } catch (err) {
            console.log(err);
            return false;
        }
    }
}