define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (TraceLevel) {
        TraceLevel[TraceLevel["Off"] = 0] = "Off";
        TraceLevel[TraceLevel["Error"] = 1] = "Error";
        TraceLevel[TraceLevel["Warning"] = 2] = "Warning";
        TraceLevel[TraceLevel["Info"] = 3] = "Info";
        TraceLevel[TraceLevel["Verbose"] = 4] = "Verbose";
    })(exports.TraceLevel || (exports.TraceLevel = {}));
    var TraceLevel = exports.TraceLevel;
});
//# sourceMappingURL=TraceLevel.js.map