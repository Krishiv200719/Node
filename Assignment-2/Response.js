const http = require('http');

const server = http.createServer((req, res) => {

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Portal</title>
        </head>
        <body>
            <h1>Student Portal</h1>
            <hr>

            <p><strong>Name:</strong> Ramjee Mishra</p>
            <p><strong>Course:</strong> Full Stack Developer</p>
            <p><strong>College:</strong> ITM College</p>

            <p>Welcome to my application.</p>
        </body>
        </html>
    `;

    res.end(html);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});






