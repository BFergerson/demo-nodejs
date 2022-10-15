const express = require('express');
const router = express.Router();

router.get('/indicator/high-load-four-per-second', (req, res) => {
    res.sendStatus(200);
});

router.get('/indicator/high-load-two-per-second', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
