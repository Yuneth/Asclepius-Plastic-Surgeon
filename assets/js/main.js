document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
    
    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.padding = '5px 0';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.padding = '0';
        }
    });
    
    // Hero Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    // Create dots
    if (slides.length > 1 && dotsContainer) {
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });
    
        const dots = document.querySelectorAll('.dot');
    
        function goToSlide(slideIndex) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = (slideIndex + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
    
        document.querySelector('.next-slide')?.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
        });
    
        document.querySelector('.prev-slide')?.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
        });
    
        // Auto slide change
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }
    
    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDotsContainer = document.querySelector('.testimonial-dots');
    
    if (testimonials.length > 1 && testimonialDotsContainer) {
        // Create dots
        testimonials.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showTestimonial(idx));
            testimonialDotsContainer.appendChild(dot);
        });
    
        const dots = document.querySelectorAll('.testimonial-dots .dot');
    
        function showTestimonial(index) {
            testimonials[currentTestimonial].classList.remove('active');
            dots[currentTestimonial]?.classList.remove('active');
            
            currentTestimonial = (index + testimonials.length) % testimonials.length;
            
            testimonials[currentTestimonial].classList.add('active');
            dots[currentTestimonial]?.classList.add('active');
        }
    
        document.querySelector('.next-testimonial')?.addEventListener('click', () => {
            showTestimonial(currentTestimonial + 1);
        });
    
        document.querySelector('.prev-testimonial')?.addEventListener('click', () => {
            showTestimonial(currentTestimonial - 1);
        });
    
        // Auto-rotate testimonials
        setInterval(() => {
            showTestimonial(currentTestimonial + 1);
        }, 6000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation would be added here for contact page
});