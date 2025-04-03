// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
        }
    });
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Testimonials Slider
const testimonials = [
    {
        content: "The service was exceptional! The maid was professional and thorough. I highly recommend Urban Clean.",
        author: "K.Praveena",
        role: "Homeowner",
        image: "images/c1.png"
    },
    {
        content: "Best cleaning service I've ever used. They're reliable, efficient, and the results are always amazing.",
        author: "G.Jaya Dev",
        role: "Business Owner",
        image: "images/c3.png"
    },
    {
        content: "I love how easy it is to book and manage my cleaning schedule. The team is always friendly and professional.",
        author: "N.Rama Rao",
        role: "Working Parent",
        image: "images/c2.png"
    }
];

let currentTestimonial = 0;
const testimonialContent = document.querySelector('.testimonial-content p');
const testimonialAuthor = document.querySelector('.testimonial-author h4');
const testimonialRole = document.querySelector('.testimonial-author p');
const testimonialImage = document.querySelector('.testimonial-author img');

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialContent.textContent = testimonial.content;
    testimonialAuthor.textContent = testimonial.author;
    testimonialRole.textContent = testimonial.role;
    testimonialImage.src = testimonial.image;
}

// Previous and Next buttons for testimonials
document.querySelector('.prev-testimonial').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

document.querySelector('.next-testimonial').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Search Functionality
const searchForm = document.querySelector('.search-container');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const service = searchForm.querySelector('select').value;
    const location = searchForm.querySelector('input[type="text"]').value;
    
    if (!location) {
        alert('Please enter your location');
        return;
    }
    
    // Here you would typically handle the search functionality
    alert(`Searching for ${service} services in ${location}`);
});

// Tooltip System
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
    });
    
    element.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
}); 