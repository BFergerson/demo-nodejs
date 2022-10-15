const express = require('express');
const router = express.Router();

router.get('/indicator/slow-2000ms', (req, res) => {
    setTimeout(() => {
        res.sendStatus(200);
    }, 2000);
});

router.get('/indicator/slow-1000ms', (req, res) => {
    setTimeout(() => {
        res.sendStatus(200);
    }, 1000);
});

module.exports = router;
