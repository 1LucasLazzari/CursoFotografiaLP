document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.grid-terceira-parte div');

  const showItem = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Adiciona a classe 'visible' quando entra na viewport
          } else {
              entry.target.classList.remove('visible'); // Remove a classe 'visible' quando sai da viewport
          }
      });
  };

  const observer = new IntersectionObserver(showItem);

  items.forEach(item => {
      observer.observe(item); // Observa cada item da grid
  });
});