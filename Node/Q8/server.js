// server.js
const express = require('express');
const bodyParser = require('body-parser');
const circle = require('./circle'); // Import circle.js module

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle POST requests with radius
app.post('/calculate', (req, res) => {
    const radius = parseFloat(req.body.radius);

    // Validate radius
    if (isNaN(radius) || radius <= 0) {
        return res.status(400).json({ error: 'Invalid radius. It must be a positive number.' });
    }

    // Calculate area and circumference
    const area = circle.calculateArea(radius);
    const circumference = circle.calculateCircumference(radius);

    // Send the results back to the user
    res.json({
        radius: radius,
        area: area,
        circumference: circumference
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
