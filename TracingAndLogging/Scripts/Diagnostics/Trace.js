define(["require", "exports", "./TraceLevel"], function (require, exports, TraceLevel_1) {
    "use strict";
    var Trace = (function () {
        function Trace() {
        }
        Object.defineProperty(Trace, "TraceSources", {
            get: function () {
                return this._traceSources;
            },
            enumerable: true,
            configurable: true
        });
        Trace.Info = function (message) {
            this._traceSources.forEach(function (value) {
                value.Trace(TraceLevel_1.TraceLevel.Info, message);
            });
        };
        Trace.Error = function (message) {
            this._traceSources.forEach(function (value) {
                value.Trace(TraceLevel_1.TraceLevel.Error, message);
            });
        };
        Trace.Verbose = function (message) {
            this._traceSources.forEach(function (value) {
                value.Trace(TraceLevel_1.TraceLevel.Verbose, message);
            });
        };
        Trace.Warning = function (message) {
            this._traceSources.forEach(function (value) {
                value.Trace(TraceLevel_1.TraceLevel.Warning, message);
            });
        };
        Trace._traceSources = new Array();
        return Trace;
    }());
    exports.Trace = Trace;
});
//# sourceMappingURL=Trace.js.map