import { ITraceEvent } from "./ITraceEvent";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceSource } from "./ITraceSource";
import { TraceListener } from "./TraceListener";
export declare class ModalTraceListener extends TraceListener {
    constructor(traceFilter: ITraceFilter);
    protected OnShouldTrace(sender: ITraceSource, traceEvent: ITraceEvent): void;
}
