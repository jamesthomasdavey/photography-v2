import nav from './modules/nav.js';

import BlogPost from './modules/BlogPost.js';
import BlogPage from './modules/BlogPage.js';
import Blog from './modules/Blog.js';

const blogContainerEl = document.querySelector('.blog__container');

const API_KEY = 'GPFs9wx2Y6jaEyhsxfrhXqcbYlmGefKkngraQ7jOUH5xFmXZy1';
const URL_ENDPOINT = 'https://api.tumblr.com';
let url = `${URL_ENDPOINT}/v2/blog/jamesthomasdavey.tumblr.com/posts/text?api_key=${API_KEY}`;
const postsPerPage = 4;
let blogPosts;
let blogPages = [];
let myBlog;

fetch(url)
  .then(data => {
    return data.json();
  })
  .then(data => {
    blogPosts = data.response.posts.map(post => {
      return new BlogPost(post.title, post.date, post.body);
    });
    makePages();
    makeBlog();
    renderPosts();
  });

const makePages = () => {
  const numberOfPages = Math.ceil(blogPosts.length / postsPerPage);
  for (let i = 0; i < numberOfPages; i++) {
    blogPages.push(new BlogPage(blogPosts.splice(0, postsPerPage)));
  }
  console.log(blogPages);
};

const makeBlog = () => {
  myBlog = new Blog(blogPages);
};

const renderPosts = () => {
  blogContainerEl.classList.remove('display');
  setTimeout(() => {
    let markup = ``;
    myBlog.pages[myBlog.currentPageIndex].posts.forEach((post, index, array) => {
      markup += `
        <div class="blog__post">
          <div class="blog__post-heading">
            <h2 class="blog__post-title">${post.title}</h2>
            <span class="blog__post-date">${post.getFormattedDate()}</span>
          </div>
          <div class="blog__post-content">
            ${post.body}
          </div>
        </div>
      `;
      markup +=
        index + 1 === array.length
          ? ``
          : `
        <div class="blog__post-divider"></div>
      `;
    });

    let footerMarkup = `
      <div class="blog__page-footer">
        <button class="blog__arrow blog__arrow-future" ${
          myBlog.isOnFirstPage() ? 'disabled' : null
        }>
          <div class="blog__arrow-bar blog__arrow-future-bar-1"></div>
          <div class="blog__arrow-bar blog__arrow-future-bar-2"></div>
        </button>
        <button class="blog__arrow blog__arrow-past" ${myBlog.isOnLastPage() ? 'disabled' : null}>
          <div class="blog__arrow-bar blog__arrow-past-bar-1"></div>
          <div class="blog__arrow-bar blog__arrow-past-bar-2"></div>
        </button>
      </div>
    `;
    blogContainerEl.innerHTML = markup + footerMarkup;
    blogContainerEl.classList.add('display');
  }, 200);
};

const scrollToTop = () => {
  let timeOut;
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout(scrollToTop, 10);
  } else clearTimeout(timeOut);
};

document.querySelector('body').addEventListener('click', e => {
  if (e.target.classList.contains('blog__arrow-future')) {
    myBlog.decreasePageIndex();
    renderPosts();
    setTimeout(() => {
      scrollToTop();
    }, 300);
  } else if (e.target.classList.contains('blog__arrow-past')) {
    myBlog.advancePageIndex();
    renderPosts();
    setTimeout(() => {
      scrollToTop();
    }, 300);
  }
});

nav.init();
