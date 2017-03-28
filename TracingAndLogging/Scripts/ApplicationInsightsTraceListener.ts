import "AI";

import { TraceEvent } from "Diagnostics/TraceEvent";
import { TraceLevel } from "Diagnostics/TraceLevel";
import { ITraceListener } from "Diagnostics/ITraceListener";

export class ApplicationInsightsTraceListener implements ITraceListener {
    private _appInsights: Microsoft.ApplicationInsights.IAppInsights;
    constructor(traceLevel: TraceLevel, instrumentationKey: string) {
        this._traceLevel = traceLevel;

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
}