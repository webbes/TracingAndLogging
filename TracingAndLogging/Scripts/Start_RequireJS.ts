requirejs.config({
    "urlArgs": "v=01",
    packages: [
        { name: "AI", main: "ai" },
        "Diagnostics"]
});

require(["Start_Trace"], () => {
    require(["Main"]);
});