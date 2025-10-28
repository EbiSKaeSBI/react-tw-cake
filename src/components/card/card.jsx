import React from 'react';

const ProductCard = ({ product, onClick }) => (
  <div
    className="flex flex-col  bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    onClick={() => onClick(product)}
  >
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 text-start">{product.name}</h3>
      <p className="text-gray-600 text-start">{product.price}р</p>
      <p className="text-sm text-gray-500 text-start">{product.available} available</p>
    </div>
  </div>
);

export default ProductCard;