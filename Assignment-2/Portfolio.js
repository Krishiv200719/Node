const http = require('http');

const server = http.createServer((req, res) => {
    let content = '';
    let statusCode = 200;

    if (req.url === '/') {
        content = `
            <h1>Home</h1>
            <p>Welcome to my portfolio.</p>
        `;

    } else if (req.url === '/about') {
        content = `
            <h1>About Me</h1>
            <p>I build practical machine learning systems <br> from data preprocessing and feature engineering <br> to training and deployment.</p>
        `;

    } else if (req.url === '/skills') {
        content = `
            <h1>Skills</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
            </ul>
        `;

    } else if (req.url === '/projects') {
        content = `
            <h1>Projects</h1>
            <ul>
                <li>Nivanth</li>
                <li>Personal AI Assistant</li>
                <li>Gesture Recognition</li>
            </ul>
        `;

    } else if (req.url === '/contact') {
        content = `
            <h1>Contact Details</h1>
            <p>Email: ramjeemishra23@gmail.com</p>
            <p>Phone: 9263837284</p>
        `;

    } else {
        statusCode = 404;

        content = `
            <h1>404 - Page Not Found</h1>
        `;
    }

    const page = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Portfolio</title>
        </head>
        <body>
            <nav>
                <a href="/">Home</a> |
                <a href="/about">About Me</a> |
                <a href="/skills">Skills</a> |
                <a href="/projects">Projects</a> |
                <a href="/contact">Contact Details</a>
            </nav>
            <hr>
            ${content}
        </body>
        </html>
    `;
    res.end(page);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
















