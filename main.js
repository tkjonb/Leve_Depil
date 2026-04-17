// Header scoll behavior
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.add('scrolled'); // always keep it slightly padded, or actually let's toggle it
    if(window.scrollY === 0) {
      header.classList.remove('scrolled');
    }
  }
});

// FAQ Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    // Close all other
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current
    item.classList.toggle('active');
  });
});
