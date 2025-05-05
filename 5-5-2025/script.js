
// DOM Elements
const searchInput = document.querySelector('.search input');
const addToCartButtons = document.querySelectorAll('.product-card button');
const exploreButton = document.querySelector('.hero-content button');
const shopNowButtons = document.querySelectorAll('.collection button, .item button');
const emailSubscribe = document.querySelector('.footer-section input[type="email"]');

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Add to cart functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product-card');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        
        alert(`Added to cart: ${productName} - ${productPrice}`);
    });
});

// Explore products button
exploreButton.addEventListener('click', () => {
    document.querySelector('.featured-products').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Shop now buttons
shopNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to shop page...');
    });
});

// Email subscription
emailSubscribe.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const email = e.target.value;
        if (email && email.includes('@')) {
            alert('Thank you for subscribing! Check your email for 10% off voucher.');
            e.target.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    }
});

// Mobile menu toggle
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('nav ul');

logo.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
// Category hover effects
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('mousemove', (e) => {
        const rect = category.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = -(x - rect.width / 2) / 10;
        
        category.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        category.style.transition = 'transform 0.1s';
    });
    
    category.addEventListener('mouseleave', () => {
        category.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        category.style.transition = 'transform 0.5s';
    });
});
