const http = require('http');

const server = http.createServer((req, res) => {

    switch (req.url) {

        case '/':
            res.end('Welcome to Home Page');
            break;

        case '/about':
            res.end('About Us');
            break;

        case '/contact':
            res.end('Contact Information');
            break;

        case '/services':
            res.end('Our Services');
            break;

        default:
            res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});




