/* ====== NAVIGATION ====== */

const mobileMenu = document.getElementById('mobile__menu')
const navList = document.getElementById('nav__list')
const navLinks = document.querySelectorAll('.nav__link')
const menuToggle = document.getElementById('menu__toggle')

function animateLinks() {

  navLinks.forEach((link, index) => {
    link.style.animation
    ? (link.style.animation = '')
    :(link.style.animation = `navLinksFade 500ms ease forwards ${index / 7}s`)
  })
}

function handleClick() {
  navList.classList.toggle('active')

  if(menuToggle.classList.contains('bx-menu')) {

    menuToggle.classList.remove('bx-menu');
    menuToggle.classList.add('bx-x');
  } else {
    menuToggle.classList.remove('bx-x');
    menuToggle.classList.add('bx-menu');
  }
  animateLinks()
}

mobileMenu.addEventListener('click', handleClick)

function linkAction(){
  // When we click on each nav__link, we remove the show-menu class
  handleClick()

}
navLinks.forEach(n => n.addEventListener('click', linkAction))


/* ====== ACCORDION ====== */


const accordion = document.querySelectorAll('.content__box')

accordion.forEach(n => n.addEventListener('click', function() {
  
  if(!this.classList.contains('active')) {
    accordion.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
  } else {
    this.classList.remove('active')
  }
}))