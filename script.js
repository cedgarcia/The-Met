const nav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  const top = window.scrollY;
  if (top >= nav.offsetHeight + 0) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

const burger = document.querySelector(".mobile-menu");
const collapseNav = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  collapseNav.classList.toggle("visible");
});
