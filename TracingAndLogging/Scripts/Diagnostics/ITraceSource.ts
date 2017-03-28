import { TraceLevel } from "./TraceLevel";
import { ITraceListener } from "./ITraceListener";

export interface ITraceSource {
    TraceLevel: TraceLevel;
    Trace(traceLevel: TraceLevel, message: string): void;
    Listeners: Array<ITraceListener>;
}