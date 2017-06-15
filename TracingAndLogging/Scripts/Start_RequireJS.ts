requirejs.config({
    paths: {
        AppInsights: "../../node_modules/applicationinsights-js/JavaScript/JavaScriptSDK.Module/AppInsightsModule",
        tslib: "../../node_modules/tslib/tslib"
    },
    packages: ["Diagnostics"]
});

require(["Start_Trace"], () => {
    require(["Main"]);
});