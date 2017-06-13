define(["require", "exports", "tslib", "./TraceLevel", "./TraceListener"], function (require, exports, tslib_1, TraceLevel_1, TraceListener_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalTraceListener = (function (_super) {
        tslib_1.__extends(ModalTraceListener, _super);
        function ModalTraceListener(traceFilter) {
            return _super.call(this, traceFilter) || this;
        }
        ModalTraceListener.prototype.OnShouldTrace = function (sender, traceEvent) {
            alert(TraceLevel_1.TraceLevel[traceEvent.TraceLevel] + ":" + traceEvent.Message);
        };
        return ModalTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ModalTraceListener = ModalTraceListener;
});
//# sourceMappingURL=ModalTraceListener.js.map