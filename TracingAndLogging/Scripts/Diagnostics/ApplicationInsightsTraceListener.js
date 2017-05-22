var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./TraceListener", "AI"], function (require, exports, TraceListener_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApplicationInsightsTraceListener = (function (_super) {
        __extends(ApplicationInsightsTraceListener, _super);
        function ApplicationInsightsTraceListener(traceFilter, instrumentationKey) {
            var _this = _super.call(this, traceFilter) || this;
            var snippet = {
                config: {
                    instrumentationKey: instrumentationKey
                },
                queue: null,
                version: null,
            };
            var init = new Microsoft.ApplicationInsights.Initialization(snippet);
            _this._appInsights = init.loadAppInsights();
            return _this;
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