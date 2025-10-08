
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    let alturaPagina = document.documentElement.scrollHeight - window.innerHeight;
    let porcentagemScroll = (window.scrollY / alturaPagina) * 100;

    if (porcentagemScroll >= 2) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });