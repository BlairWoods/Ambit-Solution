import type { PersonData } from "../../models/personData";
import type { RepositoryInterface } from "./repositoryInterface";
import { injectable } from "inversify";

/**
 * Data repository for returning people data.
 */
@injectable()
export class DataRepository implements RepositoryInterface {
    public getPeopleData(): PersonData[] {
        throw Error("Not yet implemented!");
    }
}