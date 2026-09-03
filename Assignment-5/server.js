const express = require("express");

const app = express();
const PORT = 3000;

// --------------------------------------------------
// Task 5: Request-Response Understanding
// Log request method and URL for every request
// --------------------------------------------------

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// --------------------------------------------------
// Task 1: Basic Routes
// --------------------------------------------------

// GET /
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

// GET /about
app.get("/about", (req, res) => {
    res.send("This is About Page");
});

// GET /contact
app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});

// --------------------------------------------------
// Task 2: Route Parameter (Dynamic Route)
// --------------------------------------------------

// GET /user/:name
app.get("/user/:name", (req, res) => {
    const name = req.params.name;

    res.send(`Hello ${name}`);
});

// --------------------------------------------------
// Task 3: Multiple Route Parameters
// --------------------------------------------------

// GET /product/:id/:category
app.get("/product/:id/:category", (req, res) => {
    const id = req.params.id;
    const category = req.params.category;

    res.send(`Product ID: ${id}, Category: ${category}`);
});

// --------------------------------------------------
// Task 4: Query Parameters
// --------------------------------------------------

// GET /search?name=john&role=developer
app.get("/search", (req, res) => {
    const name = req.query.name;
    const role = req.query.role;

    res.send(`Name: ${name}, Role: ${role}`);
});

// --------------------------------------------------
// Start Server
// --------------------------------------------------

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});