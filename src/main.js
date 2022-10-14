const SourcePlusPlus = require("sourceplusplus");
SourcePlusPlus.start();

const addBreakpoint = require("./command/add-breakpoint");

function executeDemos() {
    addBreakpoint();
}

setInterval(executeDemos, 1000);

function startIndicators() {
    const express = require('express');

    const app = express();
    const failingEndpoint = require('./indicator/FailingEndpoint');
    app.use('/', failingEndpoint);
    app.listen(3000);
}

startIndicators();

function executeIndicators() {
    const axios = require('axios');
    axios.get('http://localhost:3000/indicator/fail-100-percent').catch(() => {});
    axios.get('http://localhost:3000/indicator/fail-75-percent').catch(() => {});
    axios.get('http://localhost:3000/indicator/fail-50-percent').catch(() => {});
}

setInterval(executeIndicators, 1000);