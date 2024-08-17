const { addRegistration } = require('./app');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'medhaxl'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// API endpoint to handle form submission
app.post('/register', (req, res) => {
    // Destructure the request body to get the required fields
    const { firstName, lastName, phoneNumber, email, course, city, highestQualification } = req.body;

    // Define the SQL query to insert data into the registrations table
    const sql = `INSERT INTO registrations (firstName, lastName, phoneNumber, email, course, city, highestQualification) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    // Execute the SQL query with the provided data
    db.query(sql, [firstName, lastName, phoneNumber, email, course, city, highestQualification], (err, result) => {
        if (err) {
            // Log the error and send a 500 response with the error message
            console.error('Error storing data:', err);
            return res.status(500).send('Error storing data: ' + err.message);
        }

        // Log the success message and send a response to the client
        console.log('Data inserted successfully:', result);
        res.send('Registration successful!');
    });
});


=======
/*
checking git merge updated 
exanpl edited code

console.log(123); 456

console.log(123); 123-999

console.log(123);console.log(123);console.log(123);
*/
//this is edited file by rishi aug 13 19:30
>>>>>>> 8e2772fa42493e8f43441ed7c52a1217f103c5fa

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

