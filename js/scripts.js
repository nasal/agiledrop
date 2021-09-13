const links = document.querySelectorAll('.menu li a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  console.log('asdf')
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}
