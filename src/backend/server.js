const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL server host
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'event', // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// API endpoint to get events from the database
app.get('/api/events', (req, res) => {
  const query = 'SELECT * FROM events';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      res.status(500).json({ error: 'Failed to fetch events' });
    } else {
      res.json(results);
    }
  });
});

// API endpoint to add a new event to the database
app.post('/api/events', (req, res) => {
  const { img, title, star, reviews, time, location, date, category_name } = req.body;

  const query = 'INSERT INTO events (img, title, star, reviews, time, location, date, category_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [img, title, star, reviews, time, location, date, category_name];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting event:', err);
      res.status(500).json({ error: 'Failed to add event' });
    } else {
      res.status(201).json({ message: 'Event added successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
