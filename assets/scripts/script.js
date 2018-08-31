import nav from "./modules/nav.js";

const burger = document.querySelector(".burger");
const navBackdrop = document.querySelector(".nav__backdrop");

burger.addEventListener("click", () => {
  if (burger.classList.contains("change")) {
    nav.close();
  } else {
    nav.open();
  }
});

navBackdrop.addEventListener("click", nav.close);
