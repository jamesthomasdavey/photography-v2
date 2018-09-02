import nav from "./modules/nav.js";

const blogContainerEl = document.querySelector(".blog__container");

let url =
  "https://api.tumblr.com/v2/blog/jamesthomasdavey.tumblr.com/posts/text?api_key=GPFs9wx2Y6jaEyhsxfrhXqcbYlmGefKkngraQ7jOUH5xFmXZy1&notes_info=true";

let posts;

fetch(url)
  .then(data => {
    return data.json();
  })
  .then(data => {
    posts = data.response.posts;
    renderPosts();
    blogContainerEl.classList.add("display");
  });

const renderPosts = () => {
  let markup = ``;
  markup += `
  <div class="blog__post">
    <h2 class="blog__post-title">${posts[0].title}</h2>
    <span class="blog__post-date">${getFormattedDate(posts[0].date)}</span>
    <div class="blog__post-content">
      ${posts[0].body}
    </div>
  </div>
  `;
  blogContainerEl.innerHTML = markup;
};

const getFormattedDate = date => {
  let newDate = new Date(date);
  let formattedDate = "";
  formattedDate +=
    newDate.getMonth().toString().length === 2
      ? `${newDate.getMonth()}.`
      : `0${newDate.getMonth()}.`;
  formattedDate +=
    newDate.getDay().toString().length === 2
      ? `${newDate.getDay()}.`
      : `0${newDate.getDay()}.`;
  formattedDate += newDate.getFullYear();
  return formattedDate;
};

nav.init();

let today = new Date();
today.g;
