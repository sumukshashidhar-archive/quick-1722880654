// types for graphql
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
} from "type-graphql";
// bcrypt to hash passwords
import { hash, compare } from "bcryptjs";
// user entity
import { User } from "./entity/User";

// generation of JWT tokens and refresh tokens
import { createAccessToken } from "./auth";

import {hostname} from "os";

// defining response from login route
@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
  @Field(() => User)
  user: User;
}

// resolver
@Resolver()
export class UserResolver {
  

  // check graphql connection!
  @Query(() => String)
  hello() {
    return `You are currently using server ${hostname()}`;
  }


  //login route
  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("could not find user");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("bad password");
    }

    // login successful

    return {
      accessToken: createAccessToken(user),
      user
    };
  }


  // registration route
  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashedPassword = await hash(password, 12);

    try {
      await User.insert({
        email,
        password: hashedPassword
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
}
