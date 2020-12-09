//
import {Query, Resolver, UseMiddleware, Ctx, Mutation, Arg} from "type-graphql";
import { MyContext } from "./MyContext";

// Middleware to check user authentication
import { isAuth } from "./isAuth";


// entities
import { User } from "./entity/User";
import {Post} from "./entity/Post";


function mysqlDate(){
    /**
     * Function for getting back MySQL timestamps to add to the database
     */
    const date = new Date();
    return date.toISOString().split('T')[0];
}


@Resolver()
export class PostResolver {

    @Query(() => [Post])
    @UseMiddleware(isAuth)
    async getPosts(@Ctx() { payload }: MyContext) {
        const postslist = await Post.find({where: {user: payload!.userId}})
        return postslist
    }


    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async makePost(
        @Ctx() { payload }: MyContext,
        @Arg("content") content: string
    ) {
        console.log(content)
        console.log(payload)
        try {

            await Post.insert({
                timestamp: mysqlDate(),
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