const express = require("express");

const router = express.Router();

function routerLogger(req, res, next) {
    const currentDateTime = new Date();

    console.log(
        `${req.method} ${req.originalUrl} ${currentDateTime.toLocaleString()}`
    );

    next();
}

// Apply middleware only to this router
router.use(routerLogger);

// Students route
router.get("/students", (req, res) => {
    res.send(`
        <h1>Students List</h1>
        <p>Student 1</p>
        <p>Student 2</p>
        <p>Student 3</p>
    `);
});

// Courses route
router.get("/courses", (req, res) => {
    res.send(`
        <h1>Courses List</h1>
        <p>Computer Science</p>
        <p>Information Technology</p>
        <p>Data Science</p>
    `);
});

// Faculty route
router.get("/faculty", (req, res) => {
    res.send(`
        <h1>Faculty List</h1>
        <p>Faculty Member 1</p>
        <p>Faculty Member 2</p>
        <p>Faculty Member 3</p>
    `);
});

module.exports = router;