const axios = require("axios");

const express = require('express');
const app = express();

app.use('/', require('./failing-endpoint'));
app.use('/', require('./high-load-endpoint'));
app.use('/', require('./slow-endpoint'));
app.use('/', require('./unused-endpoint'));

app.listen(3000);

module.exports = function () {
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