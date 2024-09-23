document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.faq-item');

  const showItem = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Torna o item visível
              const question = entry.target.querySelector('.faq-question');
              if (question) {
                  question.classList.add('visible'); // Torna a pergunta visível
              }
              observer.unobserve(entry.target); // Para que não apareça mais de uma vez
          }
      });
  };

  const observer = new IntersectionObserver(showItem);
  faqItems.forEach(item => {
      observer.observe(item); // Observa cada item FAQ
  });
});