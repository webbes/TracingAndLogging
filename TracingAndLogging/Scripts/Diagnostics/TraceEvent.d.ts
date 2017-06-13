import { ITraceEvent } from "./ITraceEvent";
import { TraceLevel } from "./TraceLevel";
export declare class TraceEvent implements ITraceEvent {
    constructor(traceLevel: TraceLevel, message: string);
    private _traceLevel;
    readonly TraceLevel: TraceLevel;
    private _message;
    readonly Message: string;
}
