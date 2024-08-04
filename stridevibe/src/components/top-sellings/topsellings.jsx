import React, { useEffect, useState } from 'react';
import './topsellings.css';

const TopSellings = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Function to update cart count
    const updateCartCount = () => {
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = cartItems.length;
      }
    };

    // Function to show notification
    const showNotification = (message) => {
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
    };

    // Function to handle add to cart button click
    const handleAddToCart = (e) => {
      const product = e.target.closest('.box').querySelector('h2').textContent;
      if (!cartItems.includes(product)) {
        setCartItems(prevItems => [...prevItems, product]);
        showNotification(`${product} added to cart!`);
      } else {
        showNotification(`${product} is already in the cart!`);
      }
      updateCartCount();
    };

    // Add event listeners to all add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', handleAddToCart);
    });

    // Cleanup event listeners on component unmount
    return () => {
      addToCartButtons.forEach(button => {
        button.removeEventListener('click', handleAddToCart);
      });
    };
  }, [cartItems]);

  return (
    <>
       {notification && (
        <div className="notification-container">
          <div className="notification">{notification}</div>
        </div>
      )}
      <div className="top-selling">
        <h1>Top sellings</h1>
      </div>
      <div className="grid-container">
        <div className="box">
          <img src="/assets/pictures/Nike-shoes.png" alt="Nike Air Max" />
          <h2>Nike Air Max</h2>
          <p className="price2">$120.00</p>
          <p className="description">Experience ultimate comfort and style with the Nike Air Max. Perfect for everyday wear.</p><br />
          <button className="buy-now2" >Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/assets/pictures/Nike-shoes2.png" alt="Nike Revolution 5" />
          <h2>Nike Revolution 5</h2>
          <p className="price2">$75.00</p>
          <p className="description">Revolutionize your run with the lightweight and breathable Nike Revolution 5.</p><br />
          <button className="buy-now2">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/assets/pictures/Nike-shoes.png" alt="Nike Air Zoom Pegasus" />
          <h2>Nike Air Pegasus</h2>
          <p className="price2">$110.00</p>
          <p className="description">The Nike Air Pegasus provides responsive cushioning, support for long-distance runs.</p><br />
          <button className="buy-now2">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/assets/pictures/Nike-shoes2.png" alt="Nike Metcon 6" />
          <h2>Nike Metcon 6</h2>
          <p className="price2">$130.00</p>
          <p className="description">Engineered for high-intensity workouts, the Metcon 6 offers durability and stability.</p><br />
          <button className="buy-now2" >Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/assets/pictures/Nike-shoes.png" alt="Nike Free RN 5.0" />
          <h2>Nike Free RN 5.0</h2>
          <p className="price2">$100.00</p>
          <p className="description">Get the barefoot feel with the Nike Free RN 5.0, designed for natural movement and flexibility.</p><br />
          <button className="buy-now2">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/assets/pictures/Nike-shoes2.png" alt="Nike React Infinity Run" />
          <h2>Nike React Infinity</h2>
          <p className="price2">$160.00</p>
          <p className="description">Run with confidence in Nike React Infinity Run, built to
            reduce injury and provide smooth strides.</p><br />
          <button className="buy-now2">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/assets/pictures/Nike-shoes.png" alt="Nike Air Force 1" />
          <h2>Nike Air Force 1</h2>
          <p className="price2">$90.00</p>
          <p className="description">Classic style meets modern performance in Nike Air Force 1,<br /> a timeless sneaker.</p><br />
          <button className="buy-now2">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="box">
          <img src="/assets/pictures/Nike-shoes2.png" alt="Nike ZoomX Vaporfly" />
          <h2>Nike ZoomX Vaporfly</h2>
          <p className="price2">$250.00</p>
          <p className="description">Achieve your fastest times with the Vaporfly, featuring advanced racing technology.</p><br />
          <button className="buy-now2">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default TopSellings;
