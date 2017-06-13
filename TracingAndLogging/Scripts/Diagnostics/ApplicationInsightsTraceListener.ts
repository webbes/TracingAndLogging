import { ITraceEvent } from "./ITraceEvent";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceSource } from "./ITraceSource";
// import { TraceLevel } from "./TraceLevel";
import { AppInsights } from "AppInsights";
import { TraceListener } from "./TraceListener";

export class ApplicationInsightsTraceListener extends TraceListener {
    constructor(traceFilter: ITraceFilter, instrumentationKey: string) {
        super(traceFilter);

        if (!instrumentationKey) {
            throw new Error("instrumentationKey cannot be null");
        }

        AppInsights.downloadAndSetup({
            url: "//az416426.vo.msecnd.net/scripts/a/ai.0.js",
            instrumentationKey: instrumentationKey
        });
    }


    protected OnShouldTrace(sender: ITraceSource, traceEvent: ITraceEvent): void {
        // fastest:
        const aiSeverityLevel: number = 4 - traceEvent.TraceLevel;
        // clearest:
        // let aiSeverityLevel: AI.SeverityLevel;
        // switch (traceEvent.TraceLevel) {
        //     case TraceLevel.Error:
        //         aiSeverityLevel = AI.SeverityLevel.Error;
        //         break;
        //     case TraceLevel.Warning:
        //         aiSeverityLevel = AI.SeverityLevel.Warning;
        //         break;
        //     case TraceLevel.Info:
        //         aiSeverityLevel = AI.SeverityLevel.Information;
        //         break;
        //     case TraceLevel.Verbose:
        //         aiSeverityLevel = AI.SeverityLevel.Verbose;
        //         break;
        // }

        AppInsights.trackTrace(traceEvent.Message, undefined, aiSeverityLevel);
    }
}