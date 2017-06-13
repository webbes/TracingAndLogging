import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
export interface ITraceFilter {
    ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean;
}
