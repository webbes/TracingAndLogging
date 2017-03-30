import "AI";

import { ITraceEvent } from "./ITraceEvent";
import { ITraceFilter } from "./ITraceFilter";
import { ITraceSource } from "./ITraceSource";
// import { TraceLevel } from "./TraceLevel";
import { TraceListener } from "./TraceListener";

export class ApplicationInsightsTraceListener extends TraceListener {
    private _appInsights: Microsoft.ApplicationInsights.IAppInsights;
    constructor(traceFilter: ITraceFilter, instrumentationKey: string) {
        super(traceFilter);

        const snippet: Microsoft.ApplicationInsights.Snippet = {
            config: {
                instrumentationKey: instrumentationKey
            },
            queue: null,
            version: null,
        };

        const init: Microsoft.ApplicationInsights.Initialization = new Microsoft.ApplicationInsights.Initialization(snippet);
        this._appInsights = init.loadAppInsights();
    }


    protected OnShouldTrace(sender: ITraceSource, traceEvent: ITraceEvent): void {
        // fastest:
        const aiSeverityLevel: AI.SeverityLevel = 4 - traceEvent.TraceLevel;
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

        this._appInsights.trackTrace(traceEvent.Message, null, aiSeverityLevel);
    }
}