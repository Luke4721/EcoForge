'use client';

import { useEffect } from 'react';

export default function ThemeClientScript() {
  useEffect(() => {
    // Inject the Eco Forge logo dynamically onto the client side
    const siteLogos = document.querySelectorAll('.ata-site-logo-img');
    siteLogos.forEach((img) => {
        if (img instanceof HTMLImageElement) {
            img.src = '/ecoforge-logo.png';
            img.srcset = '/ecoforge-logo.png 1x';
            img.alt = 'Eco Forge';
            img.style.maxWidth = '200px';
        }
    });

    // Setup intersection observer for the sticky header
    const headerElement = document.querySelector('.elementor-element-35f64b1');
    if (headerElement) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                headerElement.classList.add('is-scrolled');
            } else {
                headerElement.classList.remove('is-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        // initial check
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    // Setup intersection observer for floating animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                // Animate to full opacity and original position
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) translateX(0) scale(1)';
                el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
