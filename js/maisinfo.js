const btnsInfo = document.querySelectorAll(".btn-info");
const btnVoltar = document.getElementById("btnVoltar");

const infoImg = document.getElementById("infoImg");
const infoTitle = document.getElementById("infoTitle");
const infoText1 = document.getElementById("infoText1");
const infoText2 = document.getElementById("infoText2");
const infoText3 = document.getElementById("infoText3");
const infoText4 = document.getElementById("infoText4");
const infoText5 = document.getElementById("infoText5");

const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");

let indexAtual = 0;

const dados = [
  {
    titulo: "Direito Criminal",

    img: "images/direito-criminal.jpg",

    texto1:
      "O <b>Direito Criminal (ou Penal)</b> é a área do Direito que trata dos <b>crimes</b> e das <b>penas</b> aplicadas a quem viola a lei penal.",

    texto2:
      "De forma simples, ele serve para <b>definir o que é crime</b>, <b>quem pode ser responsabilizado</b> e <b>quais são as consequências</b> para essas condutas, sempre buscando proteger a sociedade e garantir justiça.",

    texto3:
      "No dia a dia, o Direito Criminal envolve situações como:<br><br> • Acusações de furto, roubo, estelionato ou tráfico<br> • Crimes contra a vida, como ameaça ou homicídio<br> • Violência doméstica<br> • Crimes relacionados a drogas<br> • Investigações policiais e processos criminais<br><br>",

    texto4:
      "Além de punir, o Direito Criminal também tem um papel muito importante de <b>garantir direitos</b>. Mesmo alguém acusado de um crime tem direito à <b>defesa</b>, ao <b>contraditório</b> e a um <b>julgamento justo</b>.",

    texto5:
      "Em resumo, o Direito Criminal existe para <b>manter a ordem social</b>, <b>proteger as pessoas</b> e <b>assegurar que a lei seja aplicada de forma justa</b>, tanto para a sociedade quanto para o acusado.",
  },
  {
    titulo: "Direito Civil",

    img: "images/direito-civil.png",

    texto1:
      "O <b>Direito Civil</b> é a área do Direito que regula as <b>relações do dia a dia entre as pessoas</b>, sejam elas físicas ou jurídicas. Ele trata de <b>direitos</b>, <b>deveres</b> e <b>responsabilidades</b> que surgem nas situações mais comuns da vida.",

    texto2:
      "Essa área envolve temas como:<br><br> • Contratos (compra e venda, aluguel, prestação de serviços)<br> • Indenizações por danos morais ou materiais<br> • Relações familiares, como casamento, divórcio e pensão<br> • Heranças e sucessões<br> • Obrigações e responsabilidades legais<br><br>",

    texto3:
      "De forma simples, o Direito Civil busca <b>equilibrar as relações</b>, <b>resolver conflitos</b> e <b>garantir que acordos e direitos sejam respeitados</b>, sempre com base na lei.",

    texto4: "",

    texto5: "",
  },
  {
    titulo: "Direito Previdenciário",

    img: "images/direito-previdenciario.webp",

    texto1:
      "O <b>Direito Previdenciário</b> é a área responsável por cuidar dos <b>direitos relacionados à Previdência Social</b>, especialmente os benefícios do INSS.",

    texto2:
      "Ele atende pessoas que precisam de proteção em momentos importantes da vida, como:<br><br> • Aposentadoria<br> • Auxílio-doença e aposentadoria por invalidez<br> • Pensão por morte<br> • Benefícios para pessoas com deficiência<br> • Salário-maternidade<br><br>",

    texto3:
      "O principal objetivo do Direito Previdenciário é <b>garantir segurança financeira</b> ao trabalhador e à sua família quando ele <b>não pode mais trabalhar</b> ou <b>enfrenta situações de vulnerabilidade</b>, assegurando que seus direitos previdenciários sejam corretamente reconhecidos e pagos.",

    texto4: "",

    texto5: "",
  },
];

function atualizarCard(direcao = "right") {
  const area = dados[indexAtual];

  // limpa animações antigas
  infoCard.classList.remove("slide-in-right", "slide-in-left");

  // força reflow
  void infoCard.offsetWidth;

  // anima conforme direção
  infoCard.classList.add(
    direcao === "right" ? "slide-in-right" : "slide-in-left"
  );

  infoImg.src = area.img;
  infoTitle.innerHTML = area.titulo;
  infoText1.innerHTML = area.texto1;
  infoText2.innerHTML = area.texto2;
  infoText3.innerHTML = area.texto3;
  infoText4.innerHTML = area.texto4;
  infoText5.innerHTML = area.texto5;

  // Primeiro card → esconde anterior
  if (indexAtual === 0) {
    btnAnterior.classList.add("hidden");
  } else {
    btnAnterior.classList.remove("hidden");
  }

  // Último card → esconde próximo
  if (indexAtual === dados.length - 1) {
    btnProximo.classList.add("hidden");
  } else {
    btnProximo.classList.remove("hidden");
  }
}

/* ABRIR TELA */
btnsInfo.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indexAtual = index;
    atualizarCard();

    document.body.classList.add("modo-info");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* NAVEGAÇÃO */
btnAnterior.addEventListener("click", () => {
  if (indexAtual > 0) {
    indexAtual--;
    atualizarCard();
  }
});

btnProximo.addEventListener("click", () => {
  if (indexAtual < dados.length - 1) {
    indexAtual++;
    atualizarCard();
  }
});

/* FECHAR */
btnVoltar.addEventListener("click", fecharInfo);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", fecharInfo);
});

function fecharInfo() {
  document.body.classList.remove("modo-info");
}

/* ============================= */
/* SWIPE MOBILE */
/* ============================= */

let touchStartX = 0;
let touchEndX = 0;

infoCard.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

infoCard.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const distancia = touchStartX - touchEndX;

  if (Math.abs(distancia) < 50) return;

  // 👉 próximo
  if (distancia > 0 && indexAtual < dados.length - 1) {
    indexAtual++;
    atualizarCard("right");
  }

  // 👈 anterior
  if (distancia < 0 && indexAtual > 0) {
    indexAtual--;
    atualizarCard("left");
  }
}
