import { Trace } from "Diagnostics/Trace";
import { TraceSource } from "Diagnostics/TraceSource";
import { TraceLevel } from "Diagnostics/TraceLevel";
import { ConsoleLogTraceListener } from "Diagnostics/ConsoleLogTraceListener";
import { ModalTraceListener } from "Diagnostics/ModalTraceListener";
import { ApplicationInsightsTraceListener } from "ApplicationInsightsTraceListener";

Trace.TraceSources.push(
    new TraceSource(TraceLevel.Verbose,
        new ConsoleLogTraceListener(TraceLevel.Verbose),
        new ModalTraceListener(TraceLevel.Error),
        //new ApplicationInsightsTraceListener(TraceLevel.Verbose, "Your Application Insights Key")
    ));