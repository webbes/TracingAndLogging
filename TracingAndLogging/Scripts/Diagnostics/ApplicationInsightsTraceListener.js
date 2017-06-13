define(["require", "exports", "tslib", "AppInsights", "./TraceListener"], function (require, exports, tslib_1, AppInsights_1, TraceListener_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApplicationInsightsTraceListener = (function (_super) {
        tslib_1.__extends(ApplicationInsightsTraceListener, _super);
        function ApplicationInsightsTraceListener(traceFilter, instrumentationKey) {
            var _this = _super.call(this, traceFilter) || this;
            if (!instrumentationKey) {
                throw new Error("instrumentationKey cannot be null");
            }
            AppInsights_1.AppInsights.downloadAndSetup({
                url: "//az416426.vo.msecnd.net/scripts/a/ai.0.js",
                instrumentationKey: instrumentationKey
            });
            return _this;
        }
        ApplicationInsightsTraceListener.prototype.OnShouldTrace = function (sender, traceEvent) {
            var aiSeverityLevel = 4 - traceEvent.TraceLevel;
            AppInsights_1.AppInsights.trackTrace(traceEvent.Message, undefined, aiSeverityLevel);
        };
        return ApplicationInsightsTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ApplicationInsightsTraceListener = ApplicationInsightsTraceListener;
});
//# sourceMappingURL=ApplicationInsightsTraceListener.js.map