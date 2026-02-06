const express = require('express');
const app = express();

const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World! This is my first Express app.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
