const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail').default; // Import the sendEmail function

const app = express();

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'src', req.url === '/' ? 'index.html' : req.url);

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.woff':
        case '.woff2':
            contentType = 'application/font-woff';
            break;
        case '.ttf':
            contentType = 'application/font-ttf';
            break;
        case '.otf':
            contentType = 'application/font-otf';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Sorry, there was an error: ${error.code} ..\n`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML form)
app.use(express.static('public'));

// Route to handle form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    sendEmail(name, email, message);
    res.send('Message sent successfully.');
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
