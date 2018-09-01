import nav from "./modules/nav.js";

const gallerySelectorFormEl = document.querySelector(".gallery__selector-form");
const photogridEls = document.querySelectorAll(".photogrid__grid");

gallerySelectorFormEl.addEventListener("change", () => {
  const selectedGalleryID = document
    .querySelector(".gallery__radio-button:checked")
    .getAttribute("id");
  photogridEls.forEach(photogridEl => {
    if (
      photogridEl.classList.contains(`photogrid__grid-${selectedGalleryID}`)
    ) {
      photogridEl.style.display = "grid";
    } else {
      photogridEl.style.display = "none";
    }
  });
});

nav.init();
