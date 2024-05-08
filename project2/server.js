// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Define route handler for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Top Products App!');
});

// Define route handler for /api/products
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 24.99, category: 'Clothing' },
    // Add more mock products
  ];
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
