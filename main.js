const darkModeButton = document.querySelector('#theme')
const header = document.querySelector('header')
const body = document.body
const footer = document.querySelector('footer')
const showButton = document.querySelector('.menu-btn')
const navMenu = document.querySelector('.nav-menu')

darkModeButton.addEventListener('click', event => {
    header.classList.toggle('dark-theme')
    body.classList.toggle('dark-theme')
    footer.classList.toggle('dark-theme')
    if(header.classList.contains('dark-theme')){
        event.currentTarget.textContent = 'Dark Mode'
    }else{
        event.currentTarget.textContent = 'Light Mode'
    }
})

showButton.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

ScrollReveal().reveal('#container-info');
ScrollReveal().reveal('#tecnologies-container', {delay: 250});
ScrollReveal().reveal('#projects-container', {delay: 250});
ScrollReveal().reveal('#contact-container', {delay: 250});