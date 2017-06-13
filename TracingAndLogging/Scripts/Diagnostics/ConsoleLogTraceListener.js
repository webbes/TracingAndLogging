define(["require", "exports", "tslib", "./TraceLevel", "./TraceListener"], function (require, exports, tslib_1, TraceLevel_1, TraceListener_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsoleLogTraceListener = (function (_super) {
        tslib_1.__extends(ConsoleLogTraceListener, _super);
        function ConsoleLogTraceListener(traceFilter) {
            return _super.call(this, traceFilter) || this;
        }
        ConsoleLogTraceListener.prototype.OnShouldTrace = function (sender, traceEvent) {
            switch (traceEvent.TraceLevel) {
                case TraceLevel_1.TraceLevel.Error:
                    console.error(traceEvent.Message);
                    break;
                case TraceLevel_1.TraceLevel.Warning:
                    console.warn(traceEvent.Message);
                    break;
                case TraceLevel_1.TraceLevel.Info:
                case TraceLevel_1.TraceLevel.Verbose:
                    console.log(traceEvent.Message);
                    break;
            }
        };
        return ConsoleLogTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ConsoleLogTraceListener = ConsoleLogTraceListener;
});
//# sourceMappingURL=ConsoleLogTraceListener.js.map