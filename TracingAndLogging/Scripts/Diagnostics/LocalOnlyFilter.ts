import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";

export class LocalOnlyFilter implements ITraceFilter {
    public ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean {
        return (location.hostname === "localhost" || location.hostname === "127.0.0.1");
    }
}