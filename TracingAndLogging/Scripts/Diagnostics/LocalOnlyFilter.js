define(["require", "exports"], function (require, exports) {
    "use strict";
    var LocalOnlyFilter = (function () {
        function LocalOnlyFilter() {
        }
        LocalOnlyFilter.prototype.ShouldTrace = function (traceSource, traceEvent) {
            return (location.hostname === "localhost" || location.hostname === "127.0.0.1");
        };
        return LocalOnlyFilter;
    }());
    exports.LocalOnlyFilter = LocalOnlyFilter;
});
//# sourceMappingURL=LocalOnlyFilter.js.map