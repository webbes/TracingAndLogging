requirejs.config({
    "urlArgs": "v=01",
    packages: [
        { name: "AI", main: "ai" },
        "Diagnostics"]
});
require(["Start_Trace"], function () {
    require(["Main"]);
});
//# sourceMappingURL=Start_RequireJS.js.map