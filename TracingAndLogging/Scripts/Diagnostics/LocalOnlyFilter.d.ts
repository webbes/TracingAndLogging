import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
export declare class LocalOnlyFilter implements ITraceFilter {
    ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean;
}
