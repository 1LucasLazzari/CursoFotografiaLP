document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.conteiner-segunda-parte');

  const showContainer = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  };

  const observer = new IntersectionObserver(showContainer);
  observer.observe(container);
});