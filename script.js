document.addEventListener('DOMContentLoaded', () => {
    // Icon click functionality
    document.querySelectorAll('.icon-button').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          button.parentElement.classList.add('pulse');
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            button.parentElement.classList.remove('pulse');
          }, 300);
        }
      });
    });
  
    // Tooltip functionality
    document.querySelectorAll('.icon-wrapper').forEach(wrapper => {
      wrapper.addEventListener('mouseover', () => {
        const tooltipText = wrapper.querySelector('.icon-button').getAttribute('data-tooltip');
        if (!wrapper.querySelector('.tooltip')) {
          const tooltip = document.createElement('div');
          tooltip.className = 'tooltip';
          tooltip.textContent = tooltipText;
          wrapper.appendChild(tooltip);
        }
      });
      wrapper.addEventListener('mouseout', () => {
        const tooltip = wrapper.querySelector('.tooltip');
        if (tooltip) wrapper.removeChild(tooltip);
      });
    });
  
    // Theme toggle functionality with icon
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      themeIcon.style.transform = document.body.classList.contains('light-theme') ? 'rotate(360deg)' : 'rotate(0deg)';
    });
  
    // Intersection Observer for text section animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.introduction, .text-section').forEach(section => {
      observer.observe(section);
    });
  });