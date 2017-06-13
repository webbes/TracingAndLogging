import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
import { TraceLevel } from "./TraceLevel";
export declare class TraceLevelFilter implements ITraceFilter {
    constructor(traceLevel: TraceLevel);
    private _traceLevel;
    TraceLevel: TraceLevel;
    ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean;
}
