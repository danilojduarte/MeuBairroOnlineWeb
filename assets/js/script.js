// Espera a página carregar
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');
  const carousel = document.querySelector('.carousel');

  // Filtro de busca
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const info = card.getAttribute('data-info').toLowerCase();
      card.style.display = info.includes(searchTerm) ? 'block' : 'none';
    });
  });

  // Carrossel automático melhorado
  let scrollInterval;
  const delay = 3000;

  function startCarousel() {
    scrollInterval = setInterval(() => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScrollLeft) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 10); // movimento contínuo suave
  }

  function stopCarousel() {
    clearInterval(scrollInterval);
  }

  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);

  startCarousel();
});
