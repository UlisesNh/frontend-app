import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const ImageGrid = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      async function fetchImages() {
        const promises = Array(4).fill().map(() =>
          fetch('https://source.unsplash.com/random').then(response => response.url)
        );
        setImages(await Promise.all(promises));
      }
      fetchImages();
    }, []);
  
    return (
      <div>
        {images.map((image, index) => (
          <ImageCard key={index} imageURL={image} description={`Imagen ${index + 1}`} />
        ))}
      </div>
    );
  };

export default ImageGrid;