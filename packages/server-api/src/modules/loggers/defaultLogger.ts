import { EventTypes } from "./eventTypes";
import type { LoggerInterface } from "./loggerInterface";
import { injectable } from "inversify";

/**
 * Standard logger that logs to the console.
 */
@injectable()
export class DefaultLogger implements LoggerInterface {
    public log(message: string, eventType: EventTypes = EventTypes.debug): void {
        switch (eventType) {
            case EventTypes.debug:
                console.log(message);
                break;

            case EventTypes.error:
                console.error(message);
                break;

            case EventTypes.info:
                console.log(message);
                break;

            case EventTypes.warning:
                console.warn(message);
                break;
        }
    }
}