const express = require("express");
require("dotenv").config();

const toolRoutes = require("./routes/toolRoutes");

const app = express();

app.use(express.json());

app.use("/api/tools", toolRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "ElevateBox AI Agent API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});