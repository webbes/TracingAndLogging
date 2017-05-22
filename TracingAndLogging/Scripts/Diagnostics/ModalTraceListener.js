var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./TraceLevel", "./TraceListener"], function (require, exports, TraceLevel_1, TraceListener_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalTraceListener = (function (_super) {
        __extends(ModalTraceListener, _super);
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