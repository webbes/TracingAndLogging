define(["require", "exports"], function (require, exports) {
    "use strict";
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
                    throw new Error("Value cannot be null");
                }
                this._traceFilter = value;
            },
            enumerable: true,
            configurable: true
        });
        TraceListener.prototype.Notify = function (traceSource, traceEvent) {
            if (this.TraceFilter.ShouldTrace(traceSource, traceEvent)) {
                this.NotifyInternal(traceSource, traceEvent);
            }
        };
        return TraceListener;
    }());
    exports.TraceListener = TraceListener;
});
//# sourceMappingURL=TraceListener.js.map