import { Field, ObjectType } from "type-graphql";

/**
 * GraphQL schema containing the data for each person.
 */
@ObjectType()
export class PeopleData {
    @Field()
    public name!: string;

    @Field()
    public age!: number;

    @Field()
    public gender!: string;

    @Field()
    public id!: string;
}