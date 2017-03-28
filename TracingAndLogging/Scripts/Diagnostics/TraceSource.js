define(["require", "exports", "./TraceEvent"], function (require, exports, TraceEvent_1) {
    "use strict";
    var TraceSource = (function () {
        function TraceSource(traceLevel) {
            var listeners = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                listeners[_i - 1] = arguments[_i];
            }
            this._traceLevel = traceLevel;
            this._listeners = new Array();
            (_a = this._listeners).push.apply(_a, listeners);
            var _a;
        }
        Object.defineProperty(TraceSource.prototype, "TraceLevel", {
            get: function () {
                return this._traceLevel;
            },
            set: function (value) {
                this._traceLevel = value;
            },
            enumerable: true,
            configurable: true
        });
        TraceSource.prototype.Trace = function (traceLevel, message) {
            var traceEvent = new TraceEvent_1.TraceEvent(traceLevel, message);
            this.OnTrace(traceEvent);
        };
        TraceSource.prototype.OnTrace = function (event) {
            var _this = this;
            if (this._traceLevel >= event.TraceLevel) {
                this._listeners.forEach(function (listener) {
                    try {
                        listener.Notify(_this, event);
                    }
                    catch (ex) {
                    }
                });
            }
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