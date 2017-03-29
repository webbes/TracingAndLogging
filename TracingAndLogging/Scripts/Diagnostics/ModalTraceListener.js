var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./TraceLevel", "./TraceListener"], function (require, exports, TraceLevel_1, TraceListener_1) {
    "use strict";
    var ModalTraceListener = (function (_super) {
        __extends(ModalTraceListener, _super);
        function ModalTraceListener(traceFilter) {
            _super.call(this, traceFilter);
        }
        ModalTraceListener.prototype.NotifyInternal = function (sender, traceEvent) {
            alert(TraceLevel_1.TraceLevel[traceEvent.TraceLevel] + ":" + traceEvent.Message);
        };
        return ModalTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ModalTraceListener = ModalTraceListener;
});
//# sourceMappingURL=ModalTraceListener.js.map