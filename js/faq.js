
const items = document.querySelectorAll(".faq-question");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;
    parent.classList.toggle("active");
  });
});
