const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');
const overlay = document.querySelector('.overlay');
const body = document.body;
const btnFechar = menuMobile.querySelector('.bi-x-lg');

// Abrir menu
btnAbrirMenuMobile.addEventListener('click', (e) => {
  e.stopPropagation();
  menuMobile.classList.add('abrir-menu');
  overlay.classList.add('ativo');
  body.classList.add('no-scroll'); // trava scroll
});

// Fechar menu (função central)
function fecharMenu() {
  menuMobile.classList.remove('abrir-menu');
  overlay.classList.remove('ativo');
  body.classList.remove('no-scroll');
}

// Fechar menu clicando no X
if (btnFechar) {
  btnFechar.addEventListener('click', (e) => {
    e.stopPropagation();
    fecharMenu();
  });
}

// Fechar menu clicando no overlay
overlay.addEventListener('click', fecharMenu);

// Fechar menu ao clicar em links
menuMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', fecharMenu);
});

// Impede clique interno de fechar o menu
menuMobile.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Fechar menu clicando fora
document.addEventListener('click', () => {
  if (menuMobile.classList.contains('abrir-menu')) {
    fecharMenu();
  }
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuMobile.classList.contains('abrir-menu')) {
    fecharMenu();
  }
});