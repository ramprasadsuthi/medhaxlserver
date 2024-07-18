const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

// Route to handle form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form Submission:', { name, email, message });
    res.json({ success: true, message: 'Message received successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
