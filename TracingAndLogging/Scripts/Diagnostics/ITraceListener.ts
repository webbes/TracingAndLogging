import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";

export interface ITraceListener {
    Notify(sender: ITraceSource, event:ITraceEvent): void;
}