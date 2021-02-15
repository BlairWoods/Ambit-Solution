import type { PersonData } from "../../models/personData";
import type { RepositoryInterface } from "./repositoryInterface";
import { injectable } from "inversify";

/**
 * Data repository for returning mock people data.
 */
@injectable()
export class MockDataRepository implements RepositoryInterface {
    public getPeopleData(): PersonData[] {
        return [
            {
                "name": "Jim",
                "age": 30,
                "gender": "Male",
                "id": "b3Fshn8F976TZCTg"
            },
            {
                "name": "Jane",
                "age": 55,
                "gender": "Female",
                "id": "k3nEqkqlKmWZNejC"
            },
            {
                "name": "Bob",
                "age": 20,
                "gender": "Male",
                "id": "oqnu2ZnPTebp04bG"
            },
            {
                "name": "Sally",
                "age": 24,
                "gender": "Female",
                "id": "tKmv8RC6GlUnYcV3"
            }
        ];
    }
}