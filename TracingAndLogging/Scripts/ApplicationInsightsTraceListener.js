var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "Diagnostics/TraceLevel", "Diagnostics/TraceListener", "AI"], function (require, exports, TraceLevel_1, TraceListener_1) {
    "use strict";
    var ApplicationInsightsTraceListener = (function (_super) {
        __extends(ApplicationInsightsTraceListener, _super);
        function ApplicationInsightsTraceListener(traceFilter, instrumentationKey) {
            _super.call(this, traceFilter);
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
        ApplicationInsightsTraceListener.prototype.NotifyInternal = function (sender, traceEvent) {
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
        };
        return ApplicationInsightsTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ApplicationInsightsTraceListener = ApplicationInsightsTraceListener;
});
//# sourceMappingURL=ApplicationInsightsTraceListener.js.map