import { ITraceSource } from "./ITraceSource";
import { TraceLevel } from "./TraceLevel";
import { ITraceEvent } from "./ITraceEvent";
import { TraceEvent } from "./TraceEvent";

export class Trace {
    private static _traceSources: Array<ITraceSource> = new Array<ITraceSource>();
    public static get TraceSources(): Array<ITraceSource> {
        return this._traceSources;
    }

    public static Info(message: string): void {
        Trace.Level(TraceLevel.Info, message);
    }

    public static Error(message: string): void {
        Trace.Level(TraceLevel.Error, message);
    }

    public static Verbose(message: string): void {
        Trace.Level(TraceLevel.Verbose, message);
    }

    public static Warning(message: string): void {
        Trace.Level(TraceLevel.Warning, message);
    }

    public static Level(traceLevel: TraceLevel, message: string): void {
        const traceEvent: ITraceEvent = new TraceEvent(traceLevel, message);
        Trace.Event(traceEvent);
    }

    public static Event(traceEvent: ITraceEvent): void {
        this.TraceSources.forEach((traceSource: ITraceSource) => {
            try {
                traceSource.Trace(traceEvent);
            } catch (ex) {
                // empty catch to prevent one listener error blocking others
            }
        });
    }
}
