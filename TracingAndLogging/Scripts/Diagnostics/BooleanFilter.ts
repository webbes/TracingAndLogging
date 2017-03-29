import { ITraceEvent } from "./ITraceEvent";
import { ITraceSource } from "./ITraceSource";
import { ITraceFilter } from "./ITraceFilter";

export class BooleanFilter implements ITraceFilter {
    constructor(enabled: boolean) {
        this._enabled = enabled;
    }

    private _enabled: boolean;
    public get Enabled(): boolean {
        return this._enabled;
    }

    public set Enabled(value: boolean) {
        this._enabled = value;
    }

    public ShouldTrace(traceSource: ITraceSource, traceEvent: ITraceEvent): boolean {
        return this.Enabled;
    }
}