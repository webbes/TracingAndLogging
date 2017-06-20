# Tracing & Logging
TypeScript project that shows how one could implement tracing and logging in JavaScript / TypeScript

The design is based on the .Net System.Diagnostics namespace and contains 3 TraceListeners:
- ConsoleLogTraceListener
- ModalTraceListener
- ApplicationInsightsTraceListener

## Build/run/debug
To build/run/debug in Visual Studio you can hit F5, to build/run/debug in Visual Studio Code you can run the following commands in the integrated terminal:
- npm install
- npm start

You can then hit F5 to start debugging in Chrome.

## Use
You can use the static Trace class methods anywhere in your application:

``` TS
import { Trace } from "Diagnostics/Trace";

Trace.Info("Tracing Information.");
Trace.Error("Tracing Error.");
Trace.Warning("Tracing Warning.");
Trace.Verbose("Tracing Verbose.");
```

## Configuration
You can configure the trace listeners (preferably on application start) like this:

``` TS
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
        new ApplicationInsightsTraceListener(new TraceLevelFilter(TraceLevel.Verbose),
            "b4989aa1-c6ce-47f1-8c4c-00cd9cd1ace9")
    ));
```