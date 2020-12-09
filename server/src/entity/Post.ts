import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {ObjectType, Field, Int} from "type-graphql";
import {User} from "./User"

@ObjectType()
@Entity("posts")
export class Post extends BaseEntity{

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field(() => Date)
    @Column()
    timestamp: Date;

    @Field()
    @Column({type: "longtext"})
    content: String;


    @ManyToOne(_ => User, user => user.posts)
    user: User
}