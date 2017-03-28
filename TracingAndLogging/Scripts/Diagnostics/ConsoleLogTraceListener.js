define(["require", "exports", "./TraceLevel"], function (require, exports, TraceLevel_1) {
    "use strict";
    var ConsoleLogTraceListener = (function () {
        function ConsoleLogTraceListener(traceLevel) {
            this._traceLevel = traceLevel;
        }
        Object.defineProperty(ConsoleLogTraceListener.prototype, "TraceLevel", {
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
        ConsoleLogTraceListener.prototype.Notify = function (sender, traceEvent) {
            if (this._traceLevel >= traceEvent.TraceLevel) {
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
            }
        };
        return ConsoleLogTraceListener;
    }());
    exports.ConsoleLogTraceListener = ConsoleLogTraceListener;
});
//# sourceMappingURL=ConsoleLogTraceListener.js.map