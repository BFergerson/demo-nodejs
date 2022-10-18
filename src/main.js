const SourcePlusPlus = require("sourceplusplus");
SourcePlusPlus.start();

const addBreakpoint = require("./command/add-breakpoint");

function executeDemos() {
    addBreakpoint();
    executeIndicators();
}

setInterval(executeDemos, 1000);

function startIndicators() {
    const express = require('express');
    const app = express();

    const failingEndpoint = require('./indicator/failing-endpoint');
    app.use('/', failingEndpoint);

    const highLoadEndpoint = require('./indicator/high-load-endpoint');
    app.use('/', highLoadEndpoint);

    const slowEndpoint = require('./indicator/slow-endpoint');
    app.use('/', slowEndpoint);

    const unusedEndpoint = require('./indicator/unused-endpoint');
    app.use('/', unusedEndpoint);

    app.listen(3000);
}

startIndicators();

function executeIndicators() {
    const axios = require('axios');

    //failing endpoint indicator
    axios.get('http://localhost:3000/indicator/fail-100-percent').catch(() => {});
    axios.get('http://localhost:3000/indicator/fail-50-percent').catch(() => {});

    //slow endpoint indicator
    axios.get('http://localhost:3000/indicator/slow-2000ms').catch(() => {});
    axios.get('http://localhost:3000/indicator/slow-1000ms').catch(() => {});

    //high load endpoint indicator
    axios.get('http://localhost:3000/indicator/high-load-four-per-second').catch(() => {});
    axios.get('http://localhost:3000/indicator/high-load-four-per-second').catch(() => {});
    axios.get('http://localhost:3000/indicator/high-load-four-per-second').catch(() => {});
    axios.get('http://localhost:3000/indicator/high-load-four-per-second').catch(() => {});
    axios.get('http://localhost:3000/indicator/high-load-two-per-second').catch(() => {});
    axios.get('http://localhost:3000/indicator/high-load-two-per-second').catch(() => {});
}
