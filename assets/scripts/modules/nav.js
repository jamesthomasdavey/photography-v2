const nav = (() => {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const backdrop = document.querySelector(".nav__backdrop");

  const state = {
    open: false
  };

  const open = () => {
    nav.classList.add("open");
    burger.classList.add("change");
    for (let i = 0; i < burger.children.length; i++) {
      burger.children[i].classList.add("change");
    }
    backdrop.classList.add("display");
    state.open = true;
  };

  const close = () => {
    nav.classList.remove("open");
    burger.classList.remove("change");
    for (let i = 0; i < burger.children.length; i++) {
      burger.children[i].classList.remove("change");
    }
    backdrop.classList.remove("display");
    state.open = false;
  };

  return {
    open,
    close,
    state
  };
})();

export default nav;
