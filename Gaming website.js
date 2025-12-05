// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
});

// Close menu when clicking a link
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    hamburger.textContent = '☰';
  });
});

// Header scroll effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll animations with reset capability
function animateOnScroll() {
  // Game cards
  const gameCards = document.querySelectorAll('.game-card');
  gameCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (cardPosition < screenPosition) {
      card.classList.add('animated');
    } else {
      // Reset animation when scrolled back up
      card.classList.remove('animated');
    }
  });

  // Review cards
  const reviewCards = document.querySelectorAll('.review-card');
  reviewCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (cardPosition < screenPosition) {
      card.classList.add('animated');
    } else {
      card.classList.remove('animated');
    }
  });

  // Social cards
  const socialCards = document.querySelectorAll('.social-card');
  socialCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (cardPosition < screenPosition) {
      card.classList.add('animated');
    } else {
      card.classList.remove('animated');
    }
  });

  // Creator cards
  const creatorCards = document.querySelectorAll('.creator-card');
  creatorCards.forEach((card, index) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (cardPosition < screenPosition) {
      card.classList.add('animated');
    } else {
      card.classList.remove('animated');
    }
  });

  // Footer content
  const footerContent = document.querySelector('.footer-content');
  if (footerContent) {
    const footerPosition = footerContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (footerPosition < screenPosition) {
      footerContent.classList.add('animated');
    } else {
      footerContent.classList.remove('animated');
    }
  }
}

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Particle.js initialization
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#0ff0fc", "#ff00ff", "#00ff57", "#9d00ff", "#fff700"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#0ff0fc",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
});

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');
const statsSection = document.getElementById('stats');

const animateStats = () => {
  const sectionPosition = statsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;
  
  if (sectionPosition < screenPosition) {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
      const suffix = stat.textContent.replace(/[0-9]/g, '');
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const updateNumber = () => {
        start += increment;
        if (start < target) {
          stat.textContent = Math.floor(start) + suffix;
          requestAnimationFrame(updateNumber);
        } else {
          stat.textContent = target + suffix;
        }
      };
      
      updateNumber();
    });
    
    // Remove the event listener after animation runs
    window.removeEventListener('scroll', animateStats);
  }
};

window.addEventListener('scroll', animateStats);