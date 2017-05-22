define(["require", "exports", "./TraceLevel", "./TraceEvent"], function (require, exports, TraceLevel_1, TraceEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            Trace.Level(TraceLevel_1.TraceLevel.Info, message);
        };
        Trace.Error = function (message) {
            Trace.Level(TraceLevel_1.TraceLevel.Error, message);
        };
        Trace.Verbose = function (message) {
            Trace.Level(TraceLevel_1.TraceLevel.Verbose, message);
        };
        Trace.Warning = function (message) {
            Trace.Level(TraceLevel_1.TraceLevel.Warning, message);
        };
        Trace.Level = function (traceLevel, message) {
            var traceEvent = new TraceEvent_1.TraceEvent(traceLevel, message);
            Trace.Event(traceEvent);
        };
        Trace.Event = function (traceEvent) {
            this.TraceSources.forEach(function (traceSource) {
                try {
                    traceSource.Trace(traceEvent);
                }
                catch (ex) {
                    // empty catch to prevent one listener error blocking others
                }
            });
        };
        return Trace;
    }());
    Trace._traceSources = new Array();
    exports.Trace = Trace;
});
//# sourceMappingURL=Trace.js.map