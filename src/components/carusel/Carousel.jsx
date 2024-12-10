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
            className="lg:w-64 lg:h-64 md:w-48 md:h-48 sm:w-36 sm:h-36 w-28 h-28 object-cover mx-2 rounded-lg"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={image}
            alt={`Slide ${index + images.length}`}
            className="lg:w-64 lg:h-64 md:w-48 md:h-48 sm:w-36 sm:h-36 w-28 h-28 object-cover mx-2 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MovingCarousel;
