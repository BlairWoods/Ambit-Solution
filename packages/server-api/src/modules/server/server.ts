import { inject, injectable } from "inversify";
import { ApolloServer } from "apollo-server";
import { EventTypes } from "../loggers/eventTypes";
import { LoggerInterface } from "../loggers/loggerInterface";
import { types as LoggerTypes } from "../loggers/types";
import { PeopleDataResolver } from "../../graphql/resolvers/peopleDataResolver";
import type { ServerInfo } from "apollo-server";
import { buildSchema } from "type-graphql";
import { container } from "../core/inversify.config";

const DEFAULT_SERVER_PORT = 3000;

/**
 * Server component for setting up and starting a new GraphQL server.
 */
@injectable()
export class Server {
    private readonly logger: LoggerInterface;

    public constructor(@inject(LoggerTypes.logger) logger: LoggerInterface) {
        this.logger = logger;
    }

    /**
     * Creates a new instance of a GraphQL server.
     */
    public async setUpServer(): Promise<ApolloServer> {
        const schema = await buildSchema({
            resolvers: [PeopleDataResolver],
            emitSchemaFile: true,
            container: container
        });

        return new ApolloServer({ schema: schema, cors: true });
    }

    /**
     * Starts a given instance of a GraphQL server.
     * @param server The server instance to start.
     */
    public async startServer(server: ApolloServer): Promise<ServerInfo> {
        let serverApiPort = DEFAULT_SERVER_PORT;
        if (process.env.API_PORT !== undefined) {
            serverApiPort = parseInt(process.env.API_PORT);
        } else {
            this.logger.log(`API_PORT not found! Using default port: ${DEFAULT_SERVER_PORT}`, EventTypes.warning);
        }

        const serverInfo = await server.listen({ port: serverApiPort });
        serverInfo.server.setTimeout(10000);
        
        this.logger.log(`Server started at: ${serverInfo.url} on port: ${serverInfo.port}`, EventTypes.info);
        return serverInfo;
    }
}