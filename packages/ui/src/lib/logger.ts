/**
 * Really simple logging class. 
 * This could replaced by a more comprehensive logging framework.
 */
export class Logger {
    private readonly isDebug: boolean;

    public constructor() {
        this.isDebug = process.env.DEBUG_LOGGING?.toLowerCase() === "true";
    }

    public log(message: string): void {
        if (this.isDebug) {
            console.log(message);
        }
    }
}
