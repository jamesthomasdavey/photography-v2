import nav from "./modules/nav.js";

const openCloseNav = (() => {
  const navEl = document.querySelector("nav");
  const burgerEl = document.querySelector(".burger");
  const navBackdropEl = document.querySelector(".nav__backdrop");

  burgerEl.addEventListener("click", () => {
    if (burgerEl.classList.contains("change")) {
      nav.close();
    } else {
      nav.open();
    }
  });
  navBackdropEl.addEventListener("click", nav.close);
  navEl.addEventListener("click", e => {
    if (e.target.classList.contains("nav")) {
      nav.close();
    }
  });
})();
