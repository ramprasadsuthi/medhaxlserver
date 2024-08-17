const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your database username
    password: '1234', // Replace with your database password
    database: 'medhaxl' // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Function to insert data into the registrations table
function addRegistration(firstName, lastName, phoneNumber, email, course, city, highestQualification) {
    const sql = `INSERT INTO registrations (firstName, lastName, phoneNumber, email, course, city, highestQualification) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [firstName, lastName, phoneNumber, email, course, city, highestQualification];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return;
        }
        console.log('Data inserted successfully:', result);
    });
}

// Example of adding a registration
addRegistration('John', 'Doe', '1234567890', 'john.doe@example.com', 'Java Programming', 'New York', 'Bachelor\'s Degree');

// Close the connection when done
connection.end();
