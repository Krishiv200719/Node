const express = require("express");

const app = express();

const PORT = 3001;

// Custom global middleware
function logger(req, res, next) {
    const currentDateTime = new Date();

    console.log(
        `${req.method} ${req.url} ${currentDateTime.toLocaleString()}`
    );

    next();
}

// Apply logger globally
app.use(logger);

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>/</h1>
        <p>Welcome to Home Page</p>
    `);
});

// About route
app.get("/about", (req, res) => {
    res.send(`
        <h1>/about</h1>
        <p>About Us</p>
    `);
});

// Contact route
app.get("/contact", (req, res) => {
    res.send(`
        <h1>/contact</h1>
        <p>Contact Information</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});