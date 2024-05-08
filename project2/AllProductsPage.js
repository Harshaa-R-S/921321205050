import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://20.244.56.144/test/rand');
      setProducts(response.data.numbers);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
