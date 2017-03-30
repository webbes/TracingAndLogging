var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./TraceListener", "AI"], function (require, exports, TraceListener_1) {
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
        ApplicationInsightsTraceListener.prototype.OnShouldTrace = function (sender, traceEvent) {
            // fastest:
            var aiSeverityLevel = 4 - traceEvent.TraceLevel;
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
        };
        return ApplicationInsightsTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ApplicationInsightsTraceListener = ApplicationInsightsTraceListener;
});
//# sourceMappingURL=ApplicationInsightsTraceListener.js.map