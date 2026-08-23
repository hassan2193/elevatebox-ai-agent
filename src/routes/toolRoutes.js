const express = require("express");

const router = express.Router();

router.post("/send-high-intent-whatsapp", (req, res) => {
    console.log("Received WhatsApp tool request:");
    console.log(req.body);

    return res.status(200).json({
        success: true,
        message: "Tool request received successfully"
    });
});

module.exports = router;