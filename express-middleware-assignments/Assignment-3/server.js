const express = require("express");

const app = express();

const PORT = 3002;

// Custom response time middleware
function responseTimeLogger(req, res, next) {
    const startTime = Date.now();

    // Execute after the response has been sent
    res.on("finish", () => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        console.log(
            `${req.method} ${req.url} - ${responseTime} ms`
        );
    });

    next();
}

// Apply middleware
app.use(responseTimeLogger);

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>/</h1>
        <p>Home Page</p>
    `);
});

// Products route
app.get("/products", (req, res) => {
    res.send(`
        <h1>/products</h1>
        <p>Product List</p>
    `);
});

// Users route
app.get("/users", (req, res) => {
    res.send(`
        <h1>/users</h1>
        <p>User List</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});