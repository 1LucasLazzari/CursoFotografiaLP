let slideIndex = 0;
  const slides = document.querySelectorAll('.depoimentos div');
  const totalSlides = slides.length;
  const slidesPerView = 3; // Número de slides exibidos ao mesmo tempo

  function showSlide(index) {
    if (index >= totalSlides - slidesPerView + 1) {
      slideIndex = 0; // Volta ao primeiro slide se passar do limite
    } else if (index < 0) {
      slideIndex = totalSlides - slidesPerView; // Vai para o último conjunto de slides
    } else {
      slideIndex = index;
    }

    // Move o carrossel para o slide atual
    const depoimentos = document.querySelector('.depoimentos');
    depoimentos.style.transform = `translateX(-${slideIndex * (100 / slidesPerView)}%)`;
  }

  function mudarSlide(direction) {
    showSlide(slideIndex + direction);
  }

  // Inicializa o carrossel automático
  setInterval(() => {
    mudarSlide(1); // Muda para o próximo slide a cada 5 segundos
  }, 2500);