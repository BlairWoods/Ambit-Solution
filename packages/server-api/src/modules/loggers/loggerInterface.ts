import type { EventTypes } from "./eventTypes";

export interface LoggerInterface {
    log: (message: string, eventType: EventTypes) => void;
}