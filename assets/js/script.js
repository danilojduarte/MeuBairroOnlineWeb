// Espera a página carregar
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');

  // Escuta o evento de digitação
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Mostra ou esconde os cards conforme o termo buscado
    cards.forEach(card => {
      const info = card.getAttribute('data-info').toLowerCase();
      if (info.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
