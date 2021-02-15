import { Query, Resolver } from "type-graphql";
import { inject, injectable } from "inversify";
import { EventTypes } from "../../modules/loggers/eventTypes";
import { LoggerInterface } from "../../modules/loggers/loggerInterface";
import { types as LoggerTypes } from "../../modules/loggers/types";
import { PeopleData } from "../schemas/peopleData";
import { RepositoryInterface } from "../../modules/repositories/repositoryInterface";
import { types as RepositoryTypes } from "../../modules/repositories/types";

/**
 * GraphQL resolver for gathering people data.
 */
@injectable()
@Resolver(() => PeopleData)
export class PeopleDataResolver {

    private readonly logger: LoggerInterface;

    private readonly dataRepository: RepositoryInterface;

    public constructor(@inject(LoggerTypes.logger) logger: LoggerInterface,
        @inject(RepositoryTypes.repository) dataRepository: RepositoryInterface) {
        this.logger = logger;
        this.dataRepository = dataRepository;
    }

    /**
     * Returns a collection of people and associated data.
     */
    @Query(() => [PeopleData], { nullable: true })
    public getPeopleData(): PeopleData[] {
        this.logger.log("Getting data...", EventTypes.info);
        return this.dataRepository.getPeopleData();
    }
}