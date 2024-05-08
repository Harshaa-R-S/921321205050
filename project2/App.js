// App.js (frontend)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
