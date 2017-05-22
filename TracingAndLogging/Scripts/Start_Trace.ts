import { Trace } from "Diagnostics/Trace";
import { TraceLevelFilter } from "Diagnostics/TraceLevelFilter";
import { QueryStringFilter } from "Diagnostics/QueryStringFilter";
import { TraceSource } from "Diagnostics/TraceSource";
import { TraceLevel } from "Diagnostics/TraceLevel";
import { ConsoleLogTraceListener } from "Diagnostics/ConsoleLogTraceListener";
import { ModalTraceListener } from "Diagnostics/ModalTraceListener";
import { ApplicationInsightsTraceListener } from "Diagnostics/ApplicationInsightsTraceListener";

Trace.TraceSources.push(
    new TraceSource(new QueryStringFilter(),
        new ConsoleLogTraceListener(new TraceLevelFilter(TraceLevel.Verbose)),
        new ModalTraceListener(new TraceLevelFilter(TraceLevel.Error)),
        new ApplicationInsightsTraceListener(new TraceLevelFilter(TraceLevel.Verbose), "b4989aa1-c6ce-47f1-8c4c-00cd9cd1ace9")
    ));