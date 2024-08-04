document.addEventListener('DOMContentLoaded', function() {
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

    showSlide(currentSlide);
    setInterval(nextSlide, 4000); // Change slide every 4 seconds

    // Navbar color change on scroll
    const navbar = document.querySelector('.container');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Cart functionality
    const cartItems = []; // Array to store items in cart
    const cartCount = document.querySelector('.cart-count');
    const notificationContainer = document.querySelector('.notification-container');

    function updateCartCount() {
        cartCount.textContent = cartItems.length;
    }
    // SHOWING NOTIFICATION OF CART
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        notificationContainer.appendChild(notification);
    
        setTimeout(function() {
            notification.classList.add('show'); // Add 'show' class to display the notification
            setTimeout(function() {
                notification.classList.remove('show'); // Remove 'show' class to hide the notification after animation
                setTimeout(function() {
                    notification.remove(); // Remove the notification element from the DOM
                }, 300); // Remove after animation duration (300ms)
            }, 3000); // Display notification for 3 seconds
        }, 50); // Delay before showing notification for smooth animation
    }
    
    // ADDING EQUIPMENTS IN CART //
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement.querySelector('h2').textContent;
            
            if (!cartItems.includes(product)) {
                cartItems.push(product);
                updateCartCount();
                showNotification(`${product} added to cart!`);
            } else {
                showNotification(`${product} is already in the cart!`);
            }
        });
    });
});
// image carousel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelector('.carousel-images');

let index = 0;
const imagesToShow = 3;
const totalImages = carouselImages.children.length;
const imageWidth = 100 / imagesToShow; // Calculate width percentage dynamically

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalImages - imagesToShow;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index < totalImages - imagesToShow) ? index + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const translateValue = -index * imageWidth;
    carouselImages.style.transform = `translateX(${translateValue}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    // Toggle hamburger menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Dropdown menu toggle in mobile view
    const dropdownToggles = document.querySelectorAll('.dropdown .dropbtn');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownContent = this.nextElementSibling;
                dropdownContent.classList.toggle('show');
            }
        });
    });
});


// document.querySelectorAll(".dropdown").forEach(n =>n.addEventListener("click"),()=>{
//     hamburger.classList.remove("active")
//     navMenu.classList.remove("active")
// })






