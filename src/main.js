'use strick';
const logo = document.querySelector('.logo');
const nav = document.querySelector('.navbar');

logo.addEventListener('click', () => {
  document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 685) {
    nav.classList.remove('nav-hidden');
    nav.classList.add('nav-show');
  } else {
    nav.classList.add('nav-hidden');
    nav.classList.remove('nav-show');
  }
});
const navItem = document.querySelector('.profile-btn');
document.addEventListener('click', (e) => {
  const target = e.target.dataset.link;
  if (target == null) {
    return;
  } else {
    const moveScroll = document.querySelector(target);
    moveScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const selected = document.querySelector('.select');
    selected.classList.remove('select');
    e.target.classList.add('select');
  }
});

const toggleBtn = document.querySelector('.fa-bars');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarItems = document.querySelectorAll('.navbar-item');
toggleBtn.addEventListener('click', (e) => {
  if (window.matchMedia('(max-width: 700px)').matches === true) {
    console.log(e.target);
    navbarMenu.classList.toggle('open');
    // navbarItem.classList.toggle('open');
    console.log(toggleBtn.classList);
  }
});
navbarItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
  });
});

//circle opacity
const main = document.querySelector('#main');
const height = main.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  main.style.opacity = 0.8 - window.scrollY / height;
});
