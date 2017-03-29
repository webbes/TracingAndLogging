define(["require", "exports"], function (require, exports) {
    "use strict";
    var BooleanFilter = (function () {
        function BooleanFilter(enabled) {
            this._enabled = enabled;
        }
        Object.defineProperty(BooleanFilter.prototype, "Enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: true,
            configurable: true
        });
        BooleanFilter.prototype.ShouldTrace = function (traceSource, traceEvent) {
            return this.Enabled;
        };
        return BooleanFilter;
    }());
    exports.BooleanFilter = BooleanFilter;
});
//# sourceMappingURL=BooleanFilter.js.map