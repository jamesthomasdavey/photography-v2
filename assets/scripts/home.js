import nav from "./modules/nav.js";

const gallerySelectorFormEl = document.querySelector(".gallery__selector-form");
const galleryRadioButtonEls = document.querySelectorAll(
  ".gallery__radio-button"
);
const photogridEls = document.querySelectorAll(".photogrid__grid");

const displayPhotoGrid = () => {
  const selectedGalleryID = document
    .querySelector(".gallery__radio-button:checked")
    .getAttribute("id");
  photogridEls.forEach(photogridEl => {
    if (
      photogridEl.classList.contains(`photogrid__grid-${selectedGalleryID}`)
    ) {
      photogridEl.style.display = "grid";
      setTimeout(() => {
        photogridEl.classList.add("display");
      }, 100);
    } else {
      photogridEl.classList.remove("display");
      setTimeout(() => {
        photogridEl.style.display = "none";
      }, 50);
    }
  });
  scrollToTop();
};

const scrollToTop = () => {
  let timeOut;
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout(scrollToTop, 10);
  } else clearTimeout(timeOut);
};

const advancePhotoGrid = () => {
  let currentGalleryID = document
    .querySelector(".gallery__radio-button:checked")
    .getAttribute("id");
  if (currentGalleryID < photogridEls.length) {
    currentGalleryID++;
  } else {
    currentGalleryID = 1;
  }
  galleryRadioButtonEls.forEach(galleryRadioButtonEl => {
    if (galleryRadioButtonEl.getAttribute("id", "true") == currentGalleryID) {
      galleryRadioButtonEl.checked = true;
      displayPhotoGrid();
    }
  });
};

const autoAdvancePhotoGrid = (() => {
  let elapsed = 0;
  const waitTime = 9;
  setInterval(() => {
    elapsed++;
    if (elapsed >= waitTime) {
      advancePhotoGrid();
      elapsed = 0;
    }
  }, 1000);

  const reset = () => {
    elapsed = 0;
  };

  return {
    reset
  };
})();

displayPhotoGrid();
gallerySelectorFormEl.addEventListener("change", () => {
  displayPhotoGrid();
  autoAdvancePhotoGrid.reset();
});

nav.init();
