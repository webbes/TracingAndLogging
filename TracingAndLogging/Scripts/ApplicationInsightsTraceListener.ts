import "AI";

import { ITraceEvent } from "Diagnostics/ITraceEvent";
import { ITraceFilter } from "Diagnostics/ITraceFilter";
import { ITraceSource } from "Diagnostics/ITraceSource";
import { TraceLevel } from "Diagnostics/TraceLevel";
import { TraceListener } from "Diagnostics/TraceListener";

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


    protected NotifyInternal(sender: ITraceSource, traceEvent: ITraceEvent): void {
        switch (traceEvent.TraceLevel) {
            case TraceLevel.Error:
                this._appInsights.trackTrace(
                    traceEvent.Message,
                    null,
                    AI.SeverityLevel.Error);
                break;
            case TraceLevel.Warning:
                this._appInsights.trackTrace(
                    traceEvent.Message,
                    null,
                    AI.SeverityLevel.Warning);
                break;
            case TraceLevel.Info:
                this._appInsights.trackTrace(
                    traceEvent.Message,
                    null,
                    AI.SeverityLevel.Information);
                break;
            case TraceLevel.Verbose:
                this._appInsights.trackTrace(
                    traceEvent.Message,
                    null,
                    AI.SeverityLevel.Verbose);
                break;
        }
    }
}