import { ITraceEvent } from "./ITraceEvent";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceSource } from "./ITraceSource";
import { TraceLevel } from "./TraceLevel";
import { TraceListener } from "./TraceListener";

export class ModalTraceListener extends TraceListener {
    constructor(traceFilter: ITraceFilter) {
        super(traceFilter);
    }

    protected OnShouldTrace(sender: ITraceSource, traceEvent: ITraceEvent): void {
        alert(`${TraceLevel[traceEvent.TraceLevel]}:${traceEvent.Message}`);
    }
}