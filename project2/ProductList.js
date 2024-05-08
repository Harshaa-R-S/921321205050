// ProductList.js
import React from 'react';
import mockProducts from './mockData'; // Import mock data
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="product-list">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
