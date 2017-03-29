import { ITraceEvent } from "./ITraceEvent";
import { TraceLevel } from "./TraceLevel";

export class TraceEvent implements ITraceEvent {
    constructor(traceLevel: TraceLevel, message: string) {
        this._traceLevel = traceLevel;
        this._message = message;
    }

    private _traceLevel: TraceLevel;
    public get TraceLevel(): TraceLevel {
        return this._traceLevel;
    }

    private _message: string;
    public get Message(): string {
        return this._message;
    }
}