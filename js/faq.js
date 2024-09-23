document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
      question.addEventListener("click", function() {
          const faqItem = this.parentElement;
          const answer = this.nextElementSibling;
          
          // Alterna a exibição da resposta
          if (answer.style.display === "block") {
              answer.style.display = "none";
              faqItem.classList.remove("open"); // Remove a classe "open" para a flecha
          } else {
              answer.style.display = "block";
              faqItem.classList.add("open"); // Adiciona a classe "open" para a flecha
          }
      });
  });
});