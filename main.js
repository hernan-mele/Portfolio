const darkModeButton = document.querySelector('#theme')
const header = document.querySelector('header')
const body = document.body
const footer = document.querySelector('footer')
const showButton = document.querySelector('.menu-btn')
const navMenu = document.querySelector('.nav-menu')
const tecnologies = document.querySelectorAll('.fa-10x')

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

if(screen.width <= 480){
    tecnologies.forEach(item => {
        item.classList.remove('fa-10x')
        item.classList.add('fa-3x')
    })
}

ScrollReveal().reveal('#container-info');
ScrollReveal().reveal('#tecnologies-container', {delay: 250});
ScrollReveal().reveal('#projects-container', {delay: 250});
ScrollReveal().reveal('#contact-container', {delay: 250});