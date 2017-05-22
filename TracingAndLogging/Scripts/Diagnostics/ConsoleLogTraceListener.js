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
    var ConsoleLogTraceListener = (function (_super) {
        __extends(ConsoleLogTraceListener, _super);
        function ConsoleLogTraceListener(traceFilter) {
            return _super.call(this, traceFilter) || this;
        }
        ConsoleLogTraceListener.prototype.OnShouldTrace = function (sender, traceEvent) {
            switch (traceEvent.TraceLevel) {
                case TraceLevel_1.TraceLevel.Error:
                    console.error(traceEvent.Message);
                    break;
                case TraceLevel_1.TraceLevel.Warning:
                    console.warn(traceEvent.Message);
                    break;
                case TraceLevel_1.TraceLevel.Info:
                case TraceLevel_1.TraceLevel.Verbose:
                    console.log(traceEvent.Message);
                    break;
            }
        };
        return ConsoleLogTraceListener;
    }(TraceListener_1.TraceListener));
    exports.ConsoleLogTraceListener = ConsoleLogTraceListener;
});
//# sourceMappingURL=ConsoleLogTraceListener.js.map