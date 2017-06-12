define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TraceListener = (function () {
        function TraceListener(traceFilter) {
            this.TraceFilter = traceFilter;
        }
        Object.defineProperty(TraceListener.prototype, "TraceFilter", {
            get: function () {
                return this._traceFilter;
            },
            set: function (value) {
                if (!value) {
                    throw new Error("TraceFilter cannot be null");
                }
                this._traceFilter = value;
            },
            enumerable: true,
            configurable: true
        });
        TraceListener.prototype.Trace = function (traceSource, traceEvent) {
            if (this.TraceFilter.ShouldTrace(traceSource, traceEvent)) {
                this.OnShouldTrace(traceSource, traceEvent);
            }
        };
        return TraceListener;
    }());
    exports.TraceListener = TraceListener;
});
//# sourceMappingURL=TraceListener.js.map