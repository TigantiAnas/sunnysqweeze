// Animations au scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('section, header, .intro, .formulaire').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
        el.classList.add('visible');
      }
    });
  });
  
  // Confirmation de l'envoi du formulaire avec popup moderne
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const popup = document.getElementById('popup');
      popup.classList.add('show');
      
      setTimeout(() => {
        popup.classList.remove('show');
      }, 3000); // La popup disparaît après 3 secondes
  
      form.reset();
    });
  }
  