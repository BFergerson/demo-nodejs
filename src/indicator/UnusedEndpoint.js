const express = require('express');
const router = express.Router();

router.get('/indicator/unused-endpoint', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
