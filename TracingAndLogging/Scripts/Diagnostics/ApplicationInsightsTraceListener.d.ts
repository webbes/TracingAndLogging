import "AI";
import { ITraceEvent } from "./ITraceEvent";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceSource } from "./ITraceSource";
import { TraceListener } from "./TraceListener";
export declare class ApplicationInsightsTraceListener extends TraceListener {
    private _appInsights;
    constructor(traceFilter: ITraceFilter, instrumentationKey: string);
    protected OnShouldTrace(sender: ITraceSource, traceEvent: ITraceEvent): void;
}
