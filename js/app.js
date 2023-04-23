//show-hide menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//skills menu

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass === 'skills__content skills__close'){
      this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})

//qualification tab


// const tabs = document.querySelectorAll('[data-target]'),
//       tabContent = document.querySelectorAll('[data-content]');

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.target)

//     tabContent.forEach(tabContent => {
//       tabContent.classList.remove('qualification__active')
//     })
//     target.classList.add('qualification__active')

//     tab.forEach(tab =>{
//       tab.classList.remove('qualification__active')
//     })
//     tab.classList.add('qualification__active')
//   })
// })      

