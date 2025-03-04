/**
 * Open Legal Tools - Main JavaScript
 * Simple interactions and enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle (if needed in the future)
  const setupMobileNav = () => {
    // Placeholder for mobile navigation functionality
    // Will be implemented if needed
  };

  // Simple scroll animations
  const setupScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.feature-card, .value-card, .timeline-item');
    
    if ('IntersectionObserver' in window) {
      const appearOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, appearOptions);
      
      animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        appearOnScroll.observe(element);
      });
    }
  };

  // Helper function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Add active class to timeline markers when they come into view
  const setupTimelineAnimation = () => {
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    
    if (timelineMarkers.length === 0) return;
    
    const checkTimelineMarkers = () => {
      timelineMarkers.forEach((marker, index) => {
        if (index === 0) return; // Skip first marker (already active)
        
        if (isInViewport(marker)) {
          marker.classList.add('active');
        }
      });
    };
    
    // Initial check
    checkTimelineMarkers();
    
    // Check on scroll
    window.addEventListener('scroll', checkTimelineMarkers);
  };

  // Initialize all functionality
  const init = () => {
    setupMobileNav();
    setupScrollAnimations();
    setupTimelineAnimation();
    
    // Add CSS class for JS detection
    document.body.classList.add('js-enabled');
  };

  // Run initialization
  init();
});
