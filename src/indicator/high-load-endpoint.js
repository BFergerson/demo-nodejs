/**
 * This file is used to demonstrate the `High Load Endpoint` indicator. This indicator will be automatically added
 * to endpoints with the highest request rates and is visible in the gutter to the left of the editor.
 * <p>
 * <b>Usage:</b>
 * N/A (automatically added)
 * </p>
 * <p>
 * <b>Indicator source code:</b>
 * <a href="https://github.com/sourceplusplus/jetbrains-commander/blob/master/resources/.spp/plugins/high-load-endpoint/plugin.kts">High Load Endpoint</a>
 * </p>
 */
const express = require('express');
const router = express.Router();

// Hover your mouse over the upwards chevron icon on line 17 to see the request rate (~4/second).
router.get('/indicator/high-load-four-per-second', (req, res) => {
    res.sendStatus(200);
});

// Hover your mouse over the upwards chevron icon on line 22 to see the request rate (~2/second).
router.get('/indicator/high-load-two-per-second', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
