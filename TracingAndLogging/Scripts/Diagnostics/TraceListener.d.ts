import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceListener } from "./ITraceListener";
export declare abstract class TraceListener implements ITraceListener {
    protected constructor(traceFilter: ITraceFilter);
    private _traceFilter;
    TraceFilter: ITraceFilter;
    Trace(traceSource: ITraceSource, traceEvent: ITraceEvent): void;
    protected abstract OnShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): void;
}
