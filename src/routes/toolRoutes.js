const express = require("express");

const router = express.Router();

router.post("/send-high-intent-whatsapp", (req, res) => {
    const lead = req.body;

    if (!lead || !Object.keys(lead).length) {
        return res.status(400).json({
            success: false,
            error: "EMPTY_TOOL_BODY"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Tool request received successfully",
        received: lead
    });
});

module.exports = router;