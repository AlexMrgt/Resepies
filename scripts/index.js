/* rework */

const header = document.querySelector(".header");

window.addEventListener('scroll', scrollHandler);

let lastScroll = 0;

function scrollHandler() {

  const minScroll = 150;
  const actualScroll = window.pageYOffset;

  if (actualScroll > lastScroll && actualScroll>minScroll) {

    header.classList.add('header_hidden')
  }

  else if (actualScroll < lastScroll) {

    header.classList.remove('header_hidden');
  }

  lastScroll = actualScroll;

}
