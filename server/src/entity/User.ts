import { Entity, ObjectIdColumn, Column, BaseEntity, ObjectID } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => Int)
  @ObjectIdColumn()
  id: ObjectID;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  tokenVersion: number;
}
