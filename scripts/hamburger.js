const navbar = document.querySelector('.ham__navbar');
const ham = document.querySelector('.ham');

ham.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
}

const menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleHamburger);
});
