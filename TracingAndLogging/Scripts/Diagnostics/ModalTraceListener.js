define(["require", "exports", "./TraceLevel"], function (require, exports, TraceLevel_1) {
    "use strict";
    var ModalTraceListener = (function () {
        function ModalTraceListener(traceLevel) {
            this._traceLevel = traceLevel;
        }
        Object.defineProperty(ModalTraceListener.prototype, "TraceLevel", {
            get: function () {
                return this._traceLevel;
            },
            set: function (value) {
                if (this._traceLevel !== value) {
                    this._traceLevel = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        ModalTraceListener.prototype.Notify = function (sender, traceEvent) {
            if (this._traceLevel >= traceEvent.TraceLevel) {
                alert(TraceLevel_1.TraceLevel[traceEvent.TraceLevel] + ":" + traceEvent.Message);
            }
        };
        return ModalTraceListener;
    }());
    exports.ModalTraceListener = ModalTraceListener;
});
//# sourceMappingURL=ModalTraceListener.js.map