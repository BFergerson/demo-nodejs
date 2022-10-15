const express = require('express');
const router = express.Router();

router.get('/indicator/fail-100-percent', (req, res) => {
    res.sendStatus(500);
});

router.get('/indicator/fail-50-percent', (req, res) => {
    if (Math.random() > 0.5) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
});

module.exports = router;
