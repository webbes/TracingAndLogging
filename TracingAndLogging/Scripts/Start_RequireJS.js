"use strict";
requirejs.config({
    "urlArgs": "v=02",
    paths: {
        AI: "ai.1.0.9-build01279.min",
        tslib: "../../node_modules/tslib/tslib"
    },
    packages: ["Diagnostics"]
});
require(["Start_Trace"], function () {
    require(["Main"]);
});
//# sourceMappingURL=Start_RequireJS.js.map