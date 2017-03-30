define(["require", "exports"], function (require, exports) {
    "use strict";
    var QueryStringFilter = (function () {
        function QueryStringFilter() {
            this._queryStringName = "trace";
            this._initialized = false;
            this._shouldTrace = false;
        }
        Object.defineProperty(QueryStringFilter.prototype, "QueryStringName", {
            get: function () {
                return this._queryStringName;
            },
            set: function (value) {
                this._queryStringName = value;
                this._initialized = false;
            },
            enumerable: true,
            configurable: true
        });
        QueryStringFilter.prototype.Initialize = function () {
            if (!this._initialized) {
                this._shouldTrace = false;
                var kvps = location.search.substr(1).split("&");
                for (var i = 0; i < kvps.length; ++i) {
                    var kvp = kvps[i].split("=", 2);
                    if (kvp[0] === this.QueryStringName) {
                        this._shouldTrace = true;
                        break;
                    }
                }
                this._initialized = true;
            }
        };
        QueryStringFilter.prototype.ShouldTrace = function (traceSource, traceEvent) {
            this.Initialize();
            return this._shouldTrace;
        };
        return QueryStringFilter;
    }());
    exports.QueryStringFilter = QueryStringFilter;
});
//# sourceMappingURL=QueryStringFilter.js.map