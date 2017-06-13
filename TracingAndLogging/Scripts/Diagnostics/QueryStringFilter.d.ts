import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
export declare class QueryStringFilter implements ITraceFilter {
    private _queryStringName;
    QueryStringName: string;
    private _initialized;
    private Initialize();
    private _shouldTrace;
    ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean;
}
