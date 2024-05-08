// ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductCard;
