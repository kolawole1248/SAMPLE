/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express");

const app = express();

// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});