const SourcePlusPlus = require("sourceplusplus");
SourcePlusPlus.start();

const addBreakpoint = require("./command/add-breakpoint");
const executeIndicators = require("./indicator/indicator");

function executeDemos() {
    addBreakpoint();
    executeIndicators();
}

setInterval(executeDemos, 1000);
