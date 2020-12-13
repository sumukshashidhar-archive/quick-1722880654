import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {ObjectType, Field} from "type-graphql";
import {User} from "./User"

@ObjectType()
@Entity("posts")
export class Post extends BaseEntity{

    @Field(() => String)
    @PrimaryGeneratedColumn("uuid")
    id: String;
    
    @Field(() => Number)
    @Column({type: "bigint"})
    timestamp: Number;

    @Field(() => String)
    @Column({type: "longtext"})
    content: String;

    @ManyToOne(_ => User, user => user.posts)
    user: User
}