import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
export interface ITraceListener {
    Trace(sender: ITraceSource, event: ITraceEvent): void;
}
