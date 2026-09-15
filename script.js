// Prime car showroom — category filter for cars.html
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#carGrid .car-card');
  if (!buttons.length || !cards.length) return;

  function applyFilter(cat) {
    cards.forEach(card => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.style.display = match ? '' : 'none';
    });
    buttons.forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  // agar home page se ?cat=sports jaisa link aaye to wahi category khul jaye
  const params = new URLSearchParams(window.location.search);
  const catFromUrl = params.get('cat');
  if (catFromUrl) applyFilter(catFromUrl);
});
