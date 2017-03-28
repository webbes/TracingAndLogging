import { TraceEvent } from "./TraceEvent";
import { TraceLevel } from "./TraceLevel";
import { ITraceListener } from "./ITraceListener";

export class TraceSource {
    constructor(traceLevel: TraceLevel, ...listeners: ITraceListener[]) {
        this._traceLevel = traceLevel;
        this._listeners = new Array<ITraceListener>();
        this._listeners.push(...listeners);
    }

    private _traceLevel: TraceLevel;
    public get TraceLevel(): TraceLevel {
        return this._traceLevel;
    }

    public set TraceLevel(value: TraceLevel) {
        this._traceLevel = value;
    }

    public Trace(traceLevel: TraceLevel, message: string): void {
        const traceEvent: TraceEvent = new TraceEvent(traceLevel, message);
        this.OnTrace(traceEvent);
    }

    protected OnTrace(event: TraceEvent): void {
        if (this._traceLevel >= event.TraceLevel) {
            this._listeners.forEach((listener:ITraceListener) => {
                try {
                    listener.Notify(this, event);
                } catch(ex) {
                    // empty catch to prevent one listener error blocking others
                }
            });
        }
    }

    private _listeners: Array<ITraceListener>;
    public get Listeners(): Array<ITraceListener> {
        return this._listeners;
    }
}