const nav = document.querySelector('.navbar-menu');
const profile = document.querySelector('.one');
const profileR = document.querySelector('.m-profile');
const skills = document.querySelector('.two');
const profileLine = document.querySelector('.profile-line');
const skillLine = document.querySelector('.skill-line');
const navbarHeight = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > 685) {
    nav.classList.remove('nav-hidden');
    nav.classList.add('nav-show');
  } else {
    nav.classList.add('nav-hidden');
    nav.classList.remove('nav-show');
  }
});
// function moveProfile(elem) {
//   elem.addEventListener('click', () => {
//     profileLine.scrollIntoView({ behavior: 'smooth' });
//   });
// }
profile.addEventListener('click', () => {
  profileLine.scrollIntoView({ behavior: 'smooth' });
});
profileR.addEventListener('click', () => {
  profileLine.scrollIntoView({ behavior: 'smooth' });
});

skills.addEventListener('click', () => {
  skillLine.scrollIntoView({ behavior: 'smooth' });
});

// document.addEventListener('click', (e) => {
//   const elem = e.target;
//   if (elem === profile || elem === profileR) {
//     moveProfile(elem);
//   } else {
//     return;
//   }
// });
