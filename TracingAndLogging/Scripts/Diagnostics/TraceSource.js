define(["require", "exports"], function (require, exports) {
    "use strict";
    var TraceSource = (function () {
        function TraceSource(traceFilter) {
            var listeners = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                listeners[_i - 1] = arguments[_i];
            }
            this.TraceFilter = traceFilter;
            this._listeners = new Array();
            (_a = this._listeners).push.apply(_a, listeners);
            var _a;
        }
        Object.defineProperty(TraceSource.prototype, "TraceFilter", {
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
        TraceSource.prototype.Trace = function (traceEvent) {
            var _this = this;
            if (!this.TraceFilter.ShouldTrace(this, traceEvent)) {
                return;
            }
            this.Listeners.forEach(function (listener) {
                try {
                    listener.Trace(_this, traceEvent);
                }
                catch (ex) {
                }
            });
        };
        Object.defineProperty(TraceSource.prototype, "Listeners", {
            get: function () {
                return this._listeners;
            },
            enumerable: true,
            configurable: true
        });
        return TraceSource;
    }());
    exports.TraceSource = TraceSource;
});
//# sourceMappingURL=TraceSource.js.map