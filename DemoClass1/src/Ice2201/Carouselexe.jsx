import React, { useState, useEffect } from 'react';

const CarouselApp = () => {
  const images = [
    'https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Slide+3',
    'https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Slide+4'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000; // 3 seconds

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div style={styles.carouselContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.image}
      />
      <div style={styles.controls}>
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} style={styles.button}>
          Previous
        </button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} style={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
};
const styles = {
    carouselContainer: {
      maxWidth: '800px',
      margin: 'auto',
      textAlign: 'center',
      position: 'relative',
      border: '2px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    image: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    },
    controls: {
      marginTop: '10px',
    },
    button: {
      margin: '10px',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '18px',
      border: 'none',
      backgroundColor: '#333',
      color: 'white',
      borderRadius: '5px',
    },
  };
  

export default CarouselApp