const express = require("express");

const router = express.Router();

router.post("/send-high-intent-whatsapp", (req, res) => {
    console.log("=== WHATSAPP TOOL REQUEST ===");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("=============================");

    return res.status(200).json({
        success: true,
        message: "Tool request received successfully",
        received: req.body || {}
    });
});

module.exports = router;