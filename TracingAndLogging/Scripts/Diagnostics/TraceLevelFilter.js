define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TraceLevelFilter = (function () {
        function TraceLevelFilter(traceLevel) {
            this._traceLevel = traceLevel;
        }
        Object.defineProperty(TraceLevelFilter.prototype, "TraceLevel", {
            get: function () {
                return this._traceLevel;
            },
            set: function (value) {
                this._traceLevel = value;
            },
            enumerable: true,
            configurable: true
        });
        TraceLevelFilter.prototype.ShouldTrace = function (traceSource, traceEvent) {
            return this.TraceLevel >= traceEvent.TraceLevel;
        };
        return TraceLevelFilter;
    }());
    exports.TraceLevelFilter = TraceLevelFilter;
});
//# sourceMappingURL=TraceLevelFilter.js.map