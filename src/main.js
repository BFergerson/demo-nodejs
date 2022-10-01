const SourcePlusPlus = require("sourceplusplus");
SourcePlusPlus.start();

const addBreakpoint = require("./command/add-breakpoint");

function executeDemos() {
    addBreakpoint();
}

setInterval(executeDemos, 1000);
