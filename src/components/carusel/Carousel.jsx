// src/MovingCarousel.js
import React from 'react';

const MovingCarousel = ({ images }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-64 h-64 object-cover mx-4 rounded-xl"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={image}
            alt={`Slide ${index + images.length}`}
            className="w-64 h-64 object-cover mx-4 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default MovingCarousel;