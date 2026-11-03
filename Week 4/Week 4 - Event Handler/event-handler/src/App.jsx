import React, { useState, useEffect } from 'react';
import './ImageGallery.css'; // Optional: Add your custom styling here

const images = [
  { id: 1, url: 'https://picsum.photos/id/10/800/500', title: 'Image 1' },
  { id: 2, url: 'https://picsum.photos/id/20/800/500', title: 'Image 2' },
  { id: 3, url: 'https://picsum.photos/id/30/800/500', title: 'Image 3' },
  { id: 4, url: 'https://picsum.photos/id/40/800/500', title: 'Image 4' },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default scrolling behavior for space and arrow keys
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          setCurrentIndex((prev) => (prev + 1) % images.length);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
          break;
        case ' ': // Space bar
          setIsFullscreen((prev) => !prev);
          break;
        case 'Escape':
          setIsFullscreen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeImage = images[currentIndex];

  return (
    <div className="gallery-container" tabIndex="0">
      <h2>Image Gallery</h2>
      
      {/* Main Active Image Display */}
      <div className={`main-image-wrapper ${isFullscreen ? 'fullscreen' : ''}`}>
        <img 
          src={activeImage.url} 
          alt={activeImage.title} 
          onClick={() => setIsFullscreen(!isFullscreen)} 
        />
        <p>{activeImage.title} (Index: {currentIndex + 1}/{images.length})</p>
        {isFullscreen && <span className="close-hint">(Press ESC to exit fullscreen)</span>}
      </div>

      {/* Thumbnail List */}
      <div className="thumbnail-list">
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.title}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}