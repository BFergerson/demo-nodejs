/**
 * This file is used to demonstrate the `Failing Endpoint` indicator. This indicator will be automatically added
 * to endpoints that are actively failing and is visible in the gutter to the left of the editor.
 * <p>
 * <b>Usage:</b>
 * N/A (automatically added)
 * </p>
 * <p>
 * <b>Indicator source code:</b>
 * <a href="https://github.com/sourceplusplus/jetbrains-commander/blob/master/resources/.spp/plugins/failing-endpoint/plugin.kts">Failing Endpoint</a>
 * </p>
 */
const express = require('express');
const router = express.Router();

// Hover your mouse over the bug icon on line 17 to see the error rate (100%).
router.get('/indicator/fail-100-percent', (req, res) => {
    res.sendStatus(500);
});

// Hover your mouse over the bug icon on line 22 to see the error rate (~50%).
router.get('/indicator/fail-50-percent', (req, res) => {
    if (Math.random() > 0.5) {
        res.sendStatus(500);
    } else {
        res.sendStatus(200);
    }
});

module.exports = router;
