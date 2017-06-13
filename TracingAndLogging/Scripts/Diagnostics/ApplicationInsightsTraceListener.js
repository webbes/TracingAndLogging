define(["require", "exports", "tslib", "./TraceListener", "AI"], function (require, exports, tslib_1, TraceListener_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApplicationInsightsTraceListener = (function (_super) {
        tslib_1.__extends(ApplicationInsightsTraceListener, _super);
        function ApplicationInsightsTraceListener(traceFilter, instrumentationKey) {
            var _this = _super.call(this, traceFilter) || this;
            if (!instrumentationKey) {
                throw new Error("instrumentationKey cannot be null");
            }
            var snippet = {
                config: {
                    instrumentationKey: instrumentationKey
                },
                queue: new Array(),
                version: "",
            };
            var init = new Microsoft.ApplicationInsights.Initialization(snippet);
            _this._appInsights = init.loadAppInsights();
            return _this;
        }
        ApplicationInsightsTraceListener.prototype.OnShouldTrace = function (sender, traceEvent) {
            var aiSeverityLevel = 4 - traceEvent.TraceLevel;
            this._appInsights.trackTrace(traceEvent.Message, undefined, aiSeverityLevel);
        };
        return ApplicationInsightsTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ApplicationInsightsTraceListener = ApplicationInsightsTraceListener;
});
//# sourceMappingURL=ApplicationInsightsTraceListener.js.map