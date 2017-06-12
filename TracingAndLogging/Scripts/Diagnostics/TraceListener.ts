import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceListener } from "./ITraceListener";

export abstract class TraceListener implements ITraceListener {
    protected constructor(traceFilter: ITraceFilter) {
        this.TraceFilter = traceFilter;
    }

    private _traceFilter: ITraceFilter;
    public get TraceFilter(): ITraceFilter {
        return this._traceFilter;
    }

    public set TraceFilter(value: ITraceFilter) {
        if (!value) {
            throw new Error("TraceFilter cannot be null");
        }

        this._traceFilter = value;
    }

    public Trace(traceSource: ITraceSource, traceEvent: ITraceEvent): void {
        if (this.TraceFilter.ShouldTrace(traceSource, traceEvent)) {
            this.OnShouldTrace(traceSource, traceEvent);
        }
    }

    protected abstract OnShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): void;
}