import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function ImageCarousel({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <Carousel>
      {images.map((imgUrl, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={imgUrl}
            alt={`Slide ${index}`}
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
