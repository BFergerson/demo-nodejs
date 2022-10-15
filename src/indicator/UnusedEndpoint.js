/**
 * This file is used to demonstrate the `Unused Endpoint` indicator. This indicator will be automatically added to
 * endpoints with no traffic and is visible in the gutter to the left of the editor.
 * <p>
 * <b>Usage:</b>
 * N/A (automatically added)
 * </p>
 * <p>
 * <b>Indicator source code:</b>
 * <a href="https://github.com/sourceplusplus/jetbrains-commander/blob/master/resources/.spp/plugins/unused-endpoint/plugin.kts">Unused Endpoint</a>
 * </p>
 */
const express = require('express');
const router = express.Router();

// Hover your mouse over the cloud icon on line 17 to see the unused URL.
router.get('/indicator/unused-endpoint', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
