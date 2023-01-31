'use strick';
// const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const nav = document.querySelector('.navbar');

const profile = document.querySelector('#profile');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const comment = document.querySelector('#comment');
const contact = document.querySelector('#contact');

const profileBtn = document.querySelectorAll('.profile-btn, .m-profile');
console.log(profileBtn);
const skillsBtn = document.querySelector('.skills-btn');
console.log(skillsBtn);
const projectsBtn = document.querySelector('.projects-btn');
const commentBtn = document.querySelector('.comment-btn');
const contactBtn = document.querySelector('.contact-btn');

const profileCircle = document.querySelector('.m-profile');

const navbarHeight = nav.getBoundingClientRect().height;

// 로고를 클릭시 메인화면(첫화면)으로 넘어가는 기능
logo.addEventListener('click', () => {
  document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
});

// 스크롤 이벤트가 발생시 지정된 위치에서 Nav bar가 나오는 함수
document.addEventListener('scroll', () => {
  if (window.scrollY > 685) {
    nav.classList.toggle('nav-hidden', false);
    nav.style.transition = 'all 0.7s ease-in-out 2s';
  } else {
    nav.classList.add('nav-hidden');
    nav.classList.toggle('nav-show', true);
  }
});

// 카테고리 클릭시 이동하는 함수( Navbar, circle)
document.addEventListener('click', (e) => {
  const target = e.target.dataset.link;
  // console.log(profileBtn.includes());
  console.log(target);
  if (target == null) {
    return;
  } else {
    const moveScroll = document.querySelector(target);
    moveScroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
