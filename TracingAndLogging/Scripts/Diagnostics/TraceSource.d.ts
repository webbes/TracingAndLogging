import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceListener } from "./ITraceListener";
export declare class TraceSource implements ITraceSource {
    constructor(traceFilter: ITraceFilter, ...listeners: ITraceListener[]);
    private _traceFilter;
    TraceFilter: ITraceFilter;
    Trace(traceEvent: ITraceEvent): void;
    private _listeners;
    readonly Listeners: Array<ITraceListener>;
}
