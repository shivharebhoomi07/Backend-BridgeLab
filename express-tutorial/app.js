const express = require('express');
const app = express();

const userRoutes = require('./routes/users');

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Express Framework Basics');
});

// User routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
