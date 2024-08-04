import React, { useEffect, useState } from 'react';
import './slider.css';

const Slider = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'flex';
          document.body.style.backgroundColor = slide.getAttribute('data-bgcolor');
        } else {
          slide.style.display = 'none';
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    const interval = setInterval(nextSlide, 4000);

    function updateCartCount() {
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = cartItems.length;
      }
    }

    function showNotification(message) {
      const notificationContainer = document.querySelector('.notification-container');
      if (notificationContainer) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        notificationContainer.appendChild(notification);

        setTimeout(function () {
          notification.classList.add('show'); // Add 'show' class to display the notification
          setTimeout(function () {
            notification.classList.remove('show'); // Remove 'show' class to hide the notification after animation
            setTimeout(function () {
              notification.remove(); // Remove the notification element from the DOM
            }, 300); // Remove after animation duration (300ms)
          }, 3000); // Display notification for 3 seconds
        }, 50); // Delay before showing notification for smooth animation
      }
    }

    function handleAddToCart(e) {
      const product = e.target.closest('.content').querySelector('h2').textContent;
      if (!cartItems.includes(product)) {
        setCartItems(prevItems => [...prevItems, product]);
        showNotification(`${product} added to cart!`);
      } else {
        showNotification(`${product} is already in the cart!`);
      }
      updateCartCount();
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', handleAddToCart);
    });

    // Cleanup interval and event listeners on component unmount
    return () => {
      clearInterval(interval);
      addToCartButtons.forEach(button => {
        button.removeEventListener('click', handleAddToCart);
      });
    };
  }, [cartItems]);

  return (
    <>
      <div className="notification-container"></div>
      <div className="wrapper">
        <div className="slider">
          <div className="slide" data-bgcolor="#1A1A1D">
            <img src="/assets/pictures/Nike-shoes.png" alt="Nike Air Zoom Pegasus 38"/>
            <div className="content">
              <h2>Nike Air Zoom Pegasus 38</h2>
              <p>The Nike Air Zoom Pegasus 38 delivers the same fit and feel that runners love. Mesh in the upper helps keep things cool, while dynamic details on the side give you a fast look.</p>
              <p className="price">$120.00</p><br/>
              <button className="buy-now">Buy Now</button>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="slide" data-bgcolor="#0E0B16">
            <img src="/assets/pictures/Nike-shoes2.png" alt="Nike Air Max 2021"/>
            <div className="content">
              <h2>Nike Air Max 2021</h2>
              <p>Step into the future with the Nike Air Max 2021. Designed for a bold look and all-day comfort, this new release takes Air Max to the next level.</p>
              <p className="price">$150.00</p><br/>
              <button className="buy-now">Buy Now</button>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="slide" data-bgcolor="#53354A">
            <img src="/assets/pictures/Nike-shoes3.png" alt="Nike Free Run 5.0"/>
            <div className="content">
              <h2>Nike Free Run 5.0</h2>
              <p>Experience the barefoot feel with the Nike Free Run 5.0. Lightweight and flexible, perfect for those who love to run with freedom. Nike Free Run shoes are designed to provide a barefoot-like running experience</p>
              <p className="price">$110.00</p><br/>
              <button className="buy-now">Buy Now</button>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
