﻿import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceListener } from "./ITraceListener";

export class TraceSource implements ITraceSource {
    constructor(traceFilter: ITraceFilter, ...listeners: ITraceListener[]) {
        this.TraceFilter = traceFilter;
        this._listeners = new Array<ITraceListener>();
        this._listeners.push(...listeners);
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

    public Trace(traceEvent: ITraceEvent): void {
        if (!this.TraceFilter.ShouldTrace(this, traceEvent)) {
            return;
        }

        this.Listeners.forEach((listener: ITraceListener) => {
            try {
                listener.Trace(this, traceEvent);
            } catch (ex) {
                // empty catch to prevent one listener error blocking others
            }
        });
    }

    private _listeners: Array<ITraceListener>;
    public get Listeners(): Array<ITraceListener> {
        return this._listeners;
    }
}