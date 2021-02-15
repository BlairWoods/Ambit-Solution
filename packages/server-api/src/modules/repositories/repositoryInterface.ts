import type { PersonData } from "../../models/personData";

export interface RepositoryInterface {
    getPeopleData: () => PersonData[];
} 