/**
 * This file is used to demonstrate the `Slow Endpoint` indicator. This indicator will be automatically added to
 * endpoints with the highest response times and is visible in the gutter to the left of the editor.
 * <p>
 * <b>Usage:</b>
 * N/A (automatically added)
 * </p>
 * <p>
 * <b>Indicator source code:</b>
 * <a href="https://github.com/sourceplusplus/jetbrains-commander/blob/master/resources/.spp/plugins/slow-endpoint/plugin.kts">Slow Endpoint</a>
 * </p>
 */
const express = require('express');
const router = express.Router();

// Hover your mouse over the turtle icon on line 17 to see the response time (~2000ms).
router.get('/indicator/slow-2000ms', (req, res) => {
    setTimeout(() => {
        res.sendStatus(200);
    }, 2000);
});

// Hover your mouse over the turtle icon on line 24 to see the response time (~1000ms).
router.get('/indicator/slow-1000ms', (req, res) => {
    setTimeout(() => {
        res.sendStatus(200);
    }, 1000);
});

module.exports = router;
