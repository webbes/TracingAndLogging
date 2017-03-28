define(["require", "exports"], function (require, exports) {
    "use strict";
    var TraceEvent = (function () {
        function TraceEvent(traceLevel, message) {
            this._traceLevel = traceLevel;
            this._message = message;
        }
        Object.defineProperty(TraceEvent.prototype, "TraceLevel", {
            get: function () {
                return this._traceLevel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TraceEvent.prototype, "Message", {
            get: function () {
                return this._message;
            },
            enumerable: true,
            configurable: true
        });
        return TraceEvent;
    }());
    exports.TraceEvent = TraceEvent;
});
//# sourceMappingURL=TraceEvent.js.map