/**
 * Data for a person as returned by the GraphQL endpoint.
 */
export interface PersonData {
    name: string;
    age: number;
    gender: string;
    id: string;
}

/**
 * Structure of people data returned from the GraphQL endpoint.
 */
export interface GetPeopleData {
    getPeopleData: PersonData[];
}