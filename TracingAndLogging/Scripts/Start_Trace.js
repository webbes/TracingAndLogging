define(["require", "exports", "Diagnostics/Trace", "Diagnostics/TraceSource", "Diagnostics/TraceLevel", "Diagnostics/ConsoleLogTraceListener", "Diagnostics/ModalTraceListener"], function (require, exports, Trace_1, TraceSource_1, TraceLevel_1, ConsoleLogTraceListener_1, ModalTraceListener_1) {
    "use strict";
    Trace_1.Trace.TraceSources.push(new TraceSource_1.TraceSource(TraceLevel_1.TraceLevel.Verbose, new ConsoleLogTraceListener_1.ConsoleLogTraceListener(TraceLevel_1.TraceLevel.Verbose), new ModalTraceListener_1.ModalTraceListener(TraceLevel_1.TraceLevel.Error)));
});
//# sourceMappingURL=Start_Trace.js.map