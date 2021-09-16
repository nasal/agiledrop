const header = document.querySelector('header')
const links = document.querySelectorAll('.menu li a');
const news = document.getElementById('block-adchallenge-content')
const events = document.getElementById('block-latest-event')
const about = document.getElementById('block-about-me')
const menuOffset = header.offsetHeight
let scrollPos = window.scrollY;

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const hrefSelector = document.querySelector(href)
  // The news link does not have the href set to an existing element on the page,
  // so we check this to make sure JS doesn't throw. I fixed this locally by changing the
  // href value in the Drupal database to #block-adchallenge-content.
  if (!hrefSelector) return

  const offsetTop = hrefSelector.offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}

function activateOnScroll(el) {
  if (!el) return

  el.classList.add('active');
}

function deactivateOnScroll() {
  for (const link of links) {
    link.classList.remove('active');
  }
}

function scrollHandler() {
  const [homeMenu, newsMenu, eventMenu, aboutMenu] = links;
  scrollPos = window.scrollY;
  deactivateOnScroll();

  if (scrollPos <= news.offsetTop - menuOffset) {
    activateOnScroll(homeMenu);
  }
  else if (scrollPos >= news.offsetTop - menuOffset && scrollPos <= events.offsetTop - menuOffset) {
    activateOnScroll(newsMenu);
  }
  else if (scrollPos >= events.offsetTop - menuOffset && scrollPos <= about.offsetTop - menuOffset) {
    activateOnScroll(eventMenu);
  }
  else {
    activateOnScroll(aboutMenu);
  }
}

(function() {
  links[0].classList.add('active');

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }
})();

window.addEventListener('scroll', scrollHandler);


