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
            throw new Error("Value cannot be null");
        }

        this._traceFilter = value;
    }

    public Notify(traceSource: ITraceSource, traceEvent: ITraceEvent): void {
        if (this.TraceFilter.ShouldTrace(traceSource, traceEvent)) {
            this.NotifyInternal(traceSource, traceEvent);
        }
    }

    protected abstract NotifyInternal(traceSource: ITraceSource, traceEvent: ITraceEvent): void;
}