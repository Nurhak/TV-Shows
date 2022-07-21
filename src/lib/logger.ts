export enum LogType {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

interface Log {
  message: string;
  timestamp: string;
}

class Logger {
  private logs: object[];
  private _logArraySizeLimit = 100;
  constructor() {
    this.logs = [];
  }

  get count(): number {
    return this.logs.length;
  }

  get logArraySizeLimit(): number {
    return this._logArraySizeLimit;
  }

  log(message: string, type: LogType = LogType.INFO): void {
    const timestamp: string = new Date().toISOString();
    this.appendLog({ message, timestamp });
    switch (type) {
      case LogType.INFO:
        if (process.env.NODE_ENV === "development") {
          console.log(`[${timestamp}] INFO: ${message}`);
        }
        break;
      case LogType.WARN:
        console.warn(`[${timestamp}] WARN: ${message}`);
        break;
      case LogType.ERROR:
        console.error(`[${timestamp}] ERROR: ${message}`);
        break;
      default:
        if (process.env.NODE_ENV === "development") {
          console.log(`[${timestamp}] INFO: ${message}`);
        }
        break;
    }
  }

  private appendLog(log: Log): void {
    if (this.logs.length >= this._logArraySizeLimit) {
      this.logs.shift();
    }
    this.logs.push(log);
  }
}

const logger = new Logger();
Object.freeze(logger);
export default logger;
