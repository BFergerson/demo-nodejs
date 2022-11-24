const SourcePlusPlus = require("sourceplusplus");
SourcePlusPlus.start();

const axios = require("axios");
const express = require("express");

const addBreakpoint = require("./command/add-breakpoint");

function executeDemos() {
    addBreakpoint();
    executeIndicators();
}

setInterval(executeDemos, 1000);

function startIndicators() {
    const app = express();

    app.use('/', require('./indicator/failing-endpoint'));
    app.use('/', require('./indicator/high-load-endpoint'));
    app.use('/', require('./indicator/slow-endpoint'));
    app.use('/', require('./indicator/unused-endpoint'));

    app.listen(3000);
}

startIndicators();

function executeIndicators() {
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
