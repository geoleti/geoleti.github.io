(() => {
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.getElementById('menu-button');
  const nav = document.getElementById('site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  const count = document.getElementById('project-count');
  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(button => button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visible = 0;
      filterButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      projectCards.forEach(card => {
        const shown = filter === 'Todos' || card.dataset.category === filter;
        card.hidden = !shown;
        if (shown) visible++;
      });
      if (count) count.textContent = `${visible} proyecto${visible === 1 ? '' : 's'}`;
    }));
  }
})();
