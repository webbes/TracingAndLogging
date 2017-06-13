"use strict";
requirejs.config({
    "urlArgs": "v=02",
    paths: {
        AppInsights: "../../node_modules/applicationinsights-js/JavaScript/JavaScriptSDK.Module/AppInsightsModule",
        tslib: "../../node_modules/tslib/tslib"
    },
    packages: ["Diagnostics"]
});
require(["Start_Trace"], function () {
    require(["Main"]);
});
//# sourceMappingURL=Start_RequireJS.js.map