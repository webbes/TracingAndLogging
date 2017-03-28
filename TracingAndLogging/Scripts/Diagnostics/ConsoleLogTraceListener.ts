import { TraceEvent } from "./TraceEvent";
import { TraceLevel } from "./TraceLevel";
import { ITraceListener } from "./ITraceListener";

export class ConsoleLogTraceListener implements ITraceListener {
    constructor(traceLevel: TraceLevel) {
        this._traceLevel = traceLevel;
    }

    private _traceLevel: TraceLevel;
    public get TraceLevel(): TraceLevel {
        return this._traceLevel;
    }

    public set TraceLevel(value: TraceLevel) {
        if (this._traceLevel !== value) {
            this._traceLevel = value;
        }
    }

    public Notify(sender: any, traceEvent: TraceEvent): void {
        if (this._traceLevel >= traceEvent.TraceLevel) {
            switch (traceEvent.TraceLevel) {
                case TraceLevel.Error:
                    console.error(traceEvent.Message);
                    break;
                case TraceLevel.Warning:
                    console.warn(traceEvent.Message);
                    break;
                case TraceLevel.Info:
                case TraceLevel.Verbose:
                    console.log(traceEvent.Message);
                    break;
            }
        }
    }
}