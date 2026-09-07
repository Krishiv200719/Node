const express = require("express");
const apiRouter = require("./Routes/apiRouter");

const app = express();

const PORT = 3000;

// Mount the router at /api
app.use("/api", apiRouter);

// Home route outside the router
app.get("/", (req, res) => {
    res.send("Welcome to the Express Application");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});