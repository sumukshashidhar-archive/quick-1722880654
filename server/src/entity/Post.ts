import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {ObjectType, Field, Int} from "type-graphql";


@ObjectType()
@Entity("posts")
export class Post extends BaseEntity{

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    user: string;
    
    @Field()
    @Column()
    timestamp: Number;

    @Field()
    @Column({type: "longtext"})
    content: String;

}