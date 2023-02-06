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
document.addEventListener('click', (e) => {
  // const navItem = document.querySelector('.profile-btn');
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

const sectionId = [
  '#main',
  '#profile',
  '#skills',
  '#projects',
  '#comment',
  '#contact',
  '#end',
];
const section = sectionId.map((id) => document.querySelector(`${id}`));
const navItems = sectionId.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);
let selectedNavItem = navItems[0];
const observerOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};
const callBackObserver = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    // console.log(entry);
    if (!entry.isIntersecting) {
      const index = sectionId.indexOf(`#${entry.target.id}`);

      //스크롤링이 아래로 되어서 페이지가 올라옴
      let selectedIndex;
      console.log(entry.boundingClientRect.y);
      if (entry.boundingClientRect.y <= 0) {
        selectedIndex = index + 1;
      } else {
        selectedIndex = index - 1;
      }
      selectedNavItem.classList.remove('select');
      selectedNavItem = navItems[selectedIndex];
      selectedNavItem.classList.add('select');
    }
    // const contactSelect = entry.document.querySelector('.contact');

    // console.log(entry);
  });
};
const observer = new IntersectionObserver(callBackObserver, observerOption);
section.forEach((section) => observer.observe(section));
