import { TraceEvent } from "./TraceEvent";

export interface ITraceListener {
    Notify(sender: any, event:TraceEvent): void;
}