requirejs.config({
    "urlArgs": "v=01",
    paths: { AI: "ai.1.0.9-build01279.min" },
    packages: ["Diagnostics"]
});

require(["Start_Trace"], () => {
    require(["Main"]);
});