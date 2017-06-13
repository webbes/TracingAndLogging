import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
export declare class BooleanFilter implements ITraceFilter {
    constructor(enabled: boolean);
    private _enabled;
    Enabled: boolean;
    ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean;
}
