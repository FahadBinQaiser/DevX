import './shop.css';
import React, { useState, useRef } from 'react';

const Shop = () => {
  const [index, setIndex] = useState(0);
  const carouselImagesRef = useRef(null);

  const imagesToShow = 3;
  const totalImages = 6; // Assuming you have 6 images
  const imageWidth = 100 / imagesToShow;

  const prevButtonHandler = () => {
    const newIndex = (index > 0) ? index - 1 : totalImages - imagesToShow;
    setIndex(newIndex);
    updateCarousel(newIndex);
  };

  const nextButtonHandler = () => {
    const newIndex = (index < totalImages - imagesToShow) ? index + 1 : 0;
    setIndex(newIndex);
    updateCarousel(newIndex);
  };

  const updateCarousel = (currentIndex) => {
    const translateValue = -currentIndex * imageWidth;
    carouselImagesRef.current.style.transform = `translateX(${translateValue}%)`;
  };

  return (
    <>
      <div className="trending">
        <h1>Shop by classics</h1>
      </div>
      <div className="carousel">
        <button className="prev" onClick={prevButtonHandler}>&lt;</button>
        <div className="carousel-images" ref={carouselImagesRef}>
          <img src="/assets/pictures/Nike-shoes.png" alt="Image 1" />
          <img src="/assets/pictures/Nike-shoes2.png" alt="Image 2" />
          <img src="/assets/pictures/Nike-shoes3.png" alt="Image 3" />
          <img src="/assets/pictures/Nike-shoes4.png" alt="Image 4" />
          <img src="/assets/pictures/Nike-shoes7.png" alt="Image 5" />
          <img src="/assets/pictures/Nike-shoes6.png" alt="Image 6" />
        </div>
        <button className="next" onClick={nextButtonHandler}>&gt;</button>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
};

export default Shop;
