const links = document.querySelectorAll('.menu li a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  for (const link of links) {
    link.classList.remove('active')
  }

  e.target.classList.add('active')

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}
