import nav from "./modules/nav.js";

const aboutBodyEl = document.querySelector(".about__body");

aboutBodyEl.style.display = "grid";
setTimeout(() => {
  aboutBodyEl.classList.add("display");
}, 50);

nav.init();
