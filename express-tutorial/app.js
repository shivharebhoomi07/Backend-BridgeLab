const express = require('express');
const app = express();

const userRoutes = require('./routes/users');

const PORT = 3000;

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url} at ${new Date().toISOString()}`);
  next();
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Express Framework Basics');
});

// User routes
app.use('/users', userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
