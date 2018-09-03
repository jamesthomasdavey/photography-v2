import nav from "./modules/nav.js";

const photoGalleryWrapperEl = document.querySelector(".photo__gallery-wrapper");

setTimeout(() => {
  photoGalleryWrapperEl.classList.add("display");
}, 50);

nav.init();
