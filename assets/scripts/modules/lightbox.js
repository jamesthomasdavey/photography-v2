const lightbox = (() => {
  const photoGalleryWrapperEl = document.querySelector(
    ".photo__gallery-wrapper"
  );
  const photoWrapperEls = document.querySelectorAll(".photo__wrapper");
  const photoEls = document.querySelectorAll(".photo");
  const lightboxWrapperEl = document.querySelector(".lightbox__wrapper");
  const lightboxBackdropEl = document.querySelector(".lightbox__backdrop");
  const lightboxPhotoEl = document.querySelector(".lightbox__photo");
  const lightboxPhotoCoverEl = document.querySelector(".lightbox__photo-cover");
  const previousButtonEl = document.querySelector(".lightbox__arrow-previous");
  const nextButtonEl = document.querySelector(".lightbox__arrow-next");

  let currentPhotoSrc = "";

  const photoSrcs = [...photoEls].map(photoEl => photoEl.src);

  setTimeout(() => {
    photoGalleryWrapperEl.classList.add("display");
  }, 50);

  const openLightbox = () => {
    renderLightbox();
    lightboxWrapperEl.style.display = "grid";
    setTimeout(() => {
      lightboxWrapperEl.classList.add("display");
    }, 50);
  };

  const renderLightbox = () => {
    // RENDER PREVIOUS/NEXT BUTTONS
    lightboxPhotoEl.src = currentPhotoSrc;
    if (photoSrcs.indexOf(currentPhotoSrc) <= 0) {
      previousButtonEl.setAttribute("disabled", "true");
    } else {
      previousButtonEl.removeAttribute("disabled", "true");
    }
    if (photoSrcs.indexOf(currentPhotoSrc) + 1 >= photoSrcs.length) {
      nextButtonEl.setAttribute("disabled", "true");
    } else {
      nextButtonEl.removeAttribute("disabled", "true");
    }

    // CHECKS IF PHOTO IS VERTICAL OR NOT, AND APPLIES VERTICAL STYLING
    if (
      photoEls[photoSrcs.indexOf(currentPhotoSrc)].classList.contains("photo-b")
    ) {
      lightboxPhotoEl.classList.add("vert");
      lightboxPhotoEl.parentNode.classList.add("vert");
    } else {
      lightboxPhotoEl.classList.remove("vert");
      lightboxPhotoEl.parentNode.classList.remove("vert");
    }
  };

  const closeLightbox = () => {
    lightboxWrapperEl.classList.remove("display");
    setTimeout(() => {
      lightboxWrapperEl.style.display = "none";
    }, 200);
  };

  const previousPhoto = () => {
    if (currentPhotoSrc && photoSrcs.indexOf(currentPhotoSrc) !== 0) {
      currentPhotoSrc = photoSrcs[photoSrcs.indexOf(currentPhotoSrc) - 1];
      renderLightbox();
    }
  };

  const nextPhoto = () => {
    if (
      currentPhotoSrc &&
      photoSrcs.indexOf(currentPhotoSrc) + 1 !== photoSrcs.length
    ) {
      currentPhotoSrc = photoSrcs[photoSrcs.indexOf(currentPhotoSrc) + 1];
      renderLightbox();
    }
  };

  const listeners = () => {
    photoWrapperEls.forEach(photoWrapperEl => {
      photoWrapperEl.addEventListener("click", e => {
        currentPhotoSrc = e.target.parentNode.querySelector(".photo").src;
        openLightbox();
      });
    });

    nextButtonEl.addEventListener("click", nextPhoto);
    previousButtonEl.addEventListener("click", previousPhoto);
    lightboxBackdropEl.addEventListener("click", closeLightbox);

    document.querySelector("body").addEventListener("keydown", e => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        previousPhoto();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextPhoto();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    });

    lightboxPhotoCoverEl.addEventListener("click", nextPhoto);
  };

  const init = () => {
    listeners();
  };
  return {
    init
  };
})();

export default lightbox;
