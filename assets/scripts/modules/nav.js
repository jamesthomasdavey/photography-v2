const nav = (() => {
  const navEl = document.querySelector(".nav");
  const burgerEl = document.querySelector(".burger");
  const backdropEl = document.querySelector(".nav__backdrop");

  const open = () => {
    navEl.classList.add("open");
    burgerEl.classList.add("change");
    for (let i = 0; i < burgerEl.children.length; i++) {
      burgerEl.children[i].classList.add("change");
    }
    backdropEl.classList.add("display");
  };

  const close = () => {
    navEl.classList.remove("open");
    burgerEl.classList.remove("change");
    for (let i = 0; i < burgerEl.children.length; i++) {
      burgerEl.children[i].classList.remove("change");
    }
    backdropEl.classList.remove("display");
  };

  const listeners = () => {
    burgerEl.addEventListener("click", () => {
      if (burgerEl.classList.contains("change")) {
        close();
      } else {
        open();
      }
    });

    backdropEl.addEventListener("click", close);
    navEl.addEventListener("click", e => {
      if (e.target.classList.contains("nav")) {
        close();
      }
    });
  };

  const init = () => {
    listeners();
  };

  return {
    init
  };
})();

export default nav;
