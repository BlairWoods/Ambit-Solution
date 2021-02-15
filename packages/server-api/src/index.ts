import "reflect-metadata";

import { EventTypes } from "./modules/loggers/eventTypes";
import type { LoggerInterface } from "./modules/loggers/loggerInterface";
import { types as LoggerTypes } from "./modules/loggers/types";
import { Server } from "./modules/server/server";
import { config } from "dotenv";
import { container } from "./modules/core/inversify.config";

/**
 * Creates and starts a new server instance.
 */
async function main(): Promise<void> {
    config();

    const server = container.resolve<Server>(Server);
    const hostServer = await server.setUpServer();
    await server.startServer(hostServer);
}

if (require.main === module) {
    main().catch((error: unknown) => {
        const logger = container.get<LoggerInterface>(LoggerTypes.logger);
        logger.log(`Critical API Start Up Error: ${error}`, EventTypes.error);
    });
}