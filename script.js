document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-toggle');
    accordions.forEach((accordion) => {
      accordion.addEventListener('click', () => {
        const content = accordion.nextElementSibling;
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
      });
    });
  });
  
