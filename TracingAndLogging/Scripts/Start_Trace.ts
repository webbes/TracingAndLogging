import { Trace } from "Diagnostics/Trace";
import { TraceLevelFilter } from "Diagnostics/TraceLevelFilter";
import { BooleanFilter } from "Diagnostics/BooleanFilter";
import { TraceSource } from "Diagnostics/TraceSource";
import { TraceLevel } from "Diagnostics/TraceLevel";
import { ConsoleLogTraceListener } from "Diagnostics/ConsoleLogTraceListener";
import { ModalTraceListener } from "Diagnostics/ModalTraceListener";
import { ApplicationInsightsTraceListener } from "ApplicationInsightsTraceListener";

const enableTracing: boolean = true;

Trace.TraceSources.push(
    new TraceSource(new BooleanFilter(enableTracing),
        new ConsoleLogTraceListener(new TraceLevelFilter(TraceLevel.Verbose)),
        new ModalTraceListener(new TraceLevelFilter(TraceLevel.Error)),
        new ApplicationInsightsTraceListener(new TraceLevelFilter(TraceLevel.Verbose), "YOUR-APP-KEY-HERE")
    ));