import { EventTypes } from "./eventTypes";
import type { LoggerInterface } from "./loggerInterface";
import consola from "consola";
import { injectable } from "inversify";

/**
 * Standard logger using the Consola logging framework.
 */
@injectable()
export class ConsolaLogger implements LoggerInterface {
    public log(message: string, eventType: EventTypes = EventTypes.debug): void {
        switch (eventType) {
            case EventTypes.debug:
                consola.debug(message);
                break;

            case EventTypes.error:
                consola.error(message);
                break;

            case EventTypes.info:
                consola.info(message);
                break;

            case EventTypes.warning:
                consola.warn(message);
                break;
        }
    }
}