const btnBlog = document.getElementById('btn-blog');
const btnVoltar = document.getElementById('btn-voltar-blog');
const body = document.body;

const cards = document.querySelectorAll('.blog-card');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

// Entrar no modo blog
btnBlog.addEventListener('click', () => {
  body.classList.add('modo-blog');
  index = 0;
  atualizarCards();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Voltar ao site
btnVoltar.addEventListener('click', () => {
  body.classList.remove('modo-blog');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Atualiza cards e setas
function atualizarCards() {
  cards.forEach(card => card.classList.remove('ativo'));
  cards[index].classList.add('ativo');

  prev.style.display = index === 0 ? 'none' : 'block';
  next.style.display = index === cards.length - 1 ? 'none' : 'block';
}

// Próximo
next.addEventListener('click', () => {
  if (index < cards.length - 1) {
    index++;
    atualizarCards();
  }
});

// Anterior
prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    atualizarCards();
  }
});

// Todos os links do header e footer
const navLinks = document.querySelectorAll(
  'header a[href^="#"], footer a[href^="#"]'
);

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');

    if (body.classList.contains('modo-blog')) {
      e.preventDefault(); // impede comportamento padrão

      body.classList.remove('modo-blog');

      // Aguarda a animação de saída
      setTimeout(() => {
        const section = document.querySelector(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  });
});