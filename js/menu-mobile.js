
const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile'); 
const menuMobile = document.querySelector('#menu-mobile');
const body = document.body;

// abrir menu
btnAbrirMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
    body.classList.add('no-scroll'); // trava scroll
});

// fechar menu (clicando em qualquer parte do nav)
menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    body.classList.remove('no-scroll'); // libera scroll
});

// fechar menu clicando em links
menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        body.classList.remove('no-scroll');
    });
});

// fechar menu clicando no X (ícone dentro do menu)
const btnFechar = menuMobile.querySelector('.bi-x-lg');
if (btnFechar) {
    btnFechar.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        body.classList.remove('no-scroll');
    });
}

// ----------- EXTRA: fechar ao clicar fora do menu -----------
document.addEventListener('click', (event) => {
    if (!menuMobile.contains(event.target) && !btnAbrirMenuMobile.contains(event.target)) {
        menuMobile.classList.remove('abrir-menu');
        body.classList.remove('no-scroll');
    }
});