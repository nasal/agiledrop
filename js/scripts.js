const header = document.querySelector('header')
const links = document.querySelectorAll('.menu li a');
const news = document.getElementById('block-adchallenge-content')
const events = document.getElementById('block-latest-event')
const about = document.getElementById('block-about-me')
const menuOffset = header.offsetHeight
let scrollPos = window.scrollY;

(function() {
  links[0].classList.add('active');
})();

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}

function activateOnScroll(el) {
  el.classList.add('active');
}

function deactivateOnScroll() {
  for (const link of links) {
    link.classList.remove('active');
  }
}

window.addEventListener('scroll', function() {
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
});
