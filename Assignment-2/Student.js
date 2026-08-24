const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/data') {

        const student = {
            id: 1,
            name: 'Ramjee Mishra',
            course: 'B-Tech',
            semester: 3,
            city: 'Navi Mumbai'
        };

        res.end(JSON.stringify(student));
    } 
    else {
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});





