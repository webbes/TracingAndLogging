import { Trace } from "Diagnostics/Trace";
import { TraceLevelFilter } from "Diagnostics/TraceLevelFilter";
import { QueryStringFilter } from "Diagnostics/QueryStringFilter";
import { TraceSource } from "Diagnostics/TraceSource";
import { TraceLevel } from "Diagnostics/TraceLevel";
import { ConsoleLogTraceListener } from "Diagnostics/ConsoleLogTraceListener";
import { ModalTraceListener } from "Diagnostics/ModalTraceListener";
import { ApplicationInsightsTraceListener } from "ApplicationInsightsTraceListener";

Trace.TraceSources.push(
    new TraceSource(new QueryStringFilter(),
        new ConsoleLogTraceListener(new TraceLevelFilter(TraceLevel.Verbose)),
        new ModalTraceListener(new TraceLevelFilter(TraceLevel.Error)),
        new ApplicationInsightsTraceListener(new TraceLevelFilter(TraceLevel.Verbose), "YOUR-APP-KEY-HERE")
    ));