import { ConsolaLogger } from "../loggers/consolaLogger";
import { Container } from "inversify";
import { DataRepository } from "../repositories/dataRepository";
import { DefaultLogger } from "../loggers/defaultLogger";
import type { LoggerInterface } from "../loggers/loggerInterface";
import { types as LoggerTypes } from "../loggers/types";
import { MockDataRepository } from "../repositories/mockDataRepository";
import { PeopleDataResolver } from "../../graphql/resolvers/peopleDataResolver";
import type { RepositoryInterface } from "../repositories/repositoryInterface";
import { types as RepositoryTypes } from "../repositories/types";
import { config } from "dotenv";

config();

// Resolve core modules for DI.
const container = new Container();
container.bind<PeopleDataResolver>(PeopleDataResolver).to(PeopleDataResolver).inSingletonScope();

// Determine logging component to be used.
const loggerType = process.env.LOGGER_TYPE?.toLowerCase();
switch (loggerType) {
    case "consola":
        container.bind<LoggerInterface>(LoggerTypes.logger).to(ConsolaLogger);
        break;

    default:
        container.bind<LoggerInterface>(LoggerTypes.logger).to(DefaultLogger);
        break;
}

// Determine data respository to be used.
const isLiveMode = process.env.MOCK_MODE?.toLowerCase() === "false";
if (isLiveMode) {
    container.bind<RepositoryInterface>(RepositoryTypes.repository).to(DataRepository);
} else {
    container.bind<RepositoryInterface>(RepositoryTypes.repository).to(MockDataRepository);
}

export { container };