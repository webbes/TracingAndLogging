import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";
import { TraceLevel } from "./TraceLevel";

export class TraceLevelFilter implements ITraceFilter {
    constructor(traceLevel: TraceLevel) {
        this._traceLevel = traceLevel;
    }

    private _traceLevel: TraceLevel;
    public get TraceLevel(): TraceLevel {
        return this._traceLevel;
    }

    public set TraceLevel(value: TraceLevel) {
        this._traceLevel = value;
    }

    public ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean {
        return this.TraceLevel >= traceEvent.TraceLevel;
    }
}