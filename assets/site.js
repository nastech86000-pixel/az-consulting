/* AZ Consulting — menu mobile (hamburger) */
(function () {
  var burger = document.getElementById('azBurger');
  var menu = document.getElementById('azMenu');
  var overlay = document.getElementById('azOverlay');
  if (!burger || !menu || !overlay) return;
  var root = document.documentElement;

  function openMenu() {
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Fermer le menu');
    root.classList.add('az-lock');
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
    root.classList.remove('az-lock');
  }

  burger.addEventListener('click', function () {
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  overlay.addEventListener('click', closeMenu);
  var closeBtn = menu.querySelector('.az-menu-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) closeMenu();
  });
})();
