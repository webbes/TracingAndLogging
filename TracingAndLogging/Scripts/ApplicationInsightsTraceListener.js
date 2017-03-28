define(["require", "exports", "Diagnostics/TraceLevel", "AI"], function (require, exports, TraceLevel_1) {
    "use strict";
    var ApplicationInsightsTraceListener = (function () {
        function ApplicationInsightsTraceListener(traceLevel, instrumentationKey) {
            this._traceLevel = traceLevel;
            var snippet = {
                config: {
                    instrumentationKey: instrumentationKey
                },
                queue: null,
                version: null,
            };
            var init = new Microsoft.ApplicationInsights.Initialization(snippet);
            this._appInsights = init.loadAppInsights();
        }
        Object.defineProperty(ApplicationInsightsTraceListener.prototype, "TraceLevel", {
            get: function () {
                return this._traceLevel;
            },
            set: function (value) {
                if (this._traceLevel !== value) {
                    this._traceLevel = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        ApplicationInsightsTraceListener.prototype.Notify = function (sender, traceEvent) {
            if (this._traceLevel >= traceEvent.TraceLevel) {
                switch (traceEvent.TraceLevel) {
                    case TraceLevel_1.TraceLevel.Error:
                        this._appInsights.trackTrace(traceEvent.Message, null, AI.SeverityLevel.Error);
                        break;
                    case TraceLevel_1.TraceLevel.Warning:
                        this._appInsights.trackTrace(traceEvent.Message, null, AI.SeverityLevel.Warning);
                        break;
                    case TraceLevel_1.TraceLevel.Info:
                        this._appInsights.trackTrace(traceEvent.Message, null, AI.SeverityLevel.Information);
                        break;
                    case TraceLevel_1.TraceLevel.Verbose:
                        this._appInsights.trackTrace(traceEvent.Message, null, AI.SeverityLevel.Verbose);
                        break;
                }
            }
        };
        return ApplicationInsightsTraceListener;
    }());
    exports.ApplicationInsightsTraceListener = ApplicationInsightsTraceListener;
});
//# sourceMappingURL=ApplicationInsightsTraceListener.js.map