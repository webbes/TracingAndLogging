import { ITraceEvent } from "./ITraceEvent";
import { ITraceListener } from "./ITraceListener";
export interface ITraceSource {
    Trace(traceEvent: ITraceEvent): void;
    Listeners: Array<ITraceListener>;
}
