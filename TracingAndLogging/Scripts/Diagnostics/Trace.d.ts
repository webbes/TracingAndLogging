import { ITraceSource } from "./ITraceSource";
import { TraceLevel } from "./TraceLevel";
import { ITraceEvent } from "./ITraceEvent";
export declare class Trace {
    private static _traceSources;
    static readonly TraceSources: Array<ITraceSource>;
    static Info(message: string): void;
    static Error(message: string): void;
    static Verbose(message: string): void;
    static Warning(message: string): void;
    static Level(traceLevel: TraceLevel, message: string): void;
    static Event(traceEvent: ITraceEvent): void;
}
