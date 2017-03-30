import { ITraceEvent } from "./ITraceEvent";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceSource } from "./ITraceSource";
import { TraceLevel } from "./TraceLevel";
import { TraceListener } from "./TraceListener";

export class ConsoleLogTraceListener extends TraceListener {
    constructor(traceFilter: ITraceFilter) {
        super(traceFilter);
    }

    protected OnShouldTrace(sender: ITraceSource, traceEvent: ITraceEvent): void {
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