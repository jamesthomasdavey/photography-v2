import nav from "./modules/nav.js";
import lightbox from "./modules/lightbox.js";

const photoGalleryWrapperEl = document.querySelector(".photo__gallery-wrapper");

setTimeout(() => {
  photoGalleryWrapperEl.classList.add("display");
}, 50);

nav.init();
lightbox.init();
