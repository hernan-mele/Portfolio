const darkModeButton = document.querySelector('#theme')
const header = document.querySelector('header')
const body = document.body
const footer = document.querySelector('footer')
const showButton = document.querySelector('.menu-btn')
const navMenu = document.querySelector('.nav-menu')
const tecnologies = document.querySelectorAll('.tecno')
const css = document.querySelector(".skill-css")
const html = document.querySelector('.skill-html')
const js = document.querySelector('.skill-js')
const bootstrap = document.querySelector('.skill-bootstrap')
const firstChild = document.querySelector('#container-info')
const cards = document.querySelectorAll('.card')
const profilePic = document.querySelector('#profile-pic')
const title = document.querySelector('#nombre')
const tecnologiesTitle = document.querySelector('#tecnologies-title')
const projectsSection = document.querySelector('#projects-title')

darkModeButton.addEventListener('click', event => {
    header.classList.toggle('dark-theme')
    body.classList.toggle('dark-theme')
    footer.classList.toggle('dark-theme')
    css.classList.toggle('dark-theme')
    html.classList.toggle('dark-theme')
    js.classList.toggle('dark-theme')
    bootstrap.classList.toggle('dark-theme')
    title.classList.toggle('dark-theme')
    cards.forEach(card => {
        card.classList.toggle('dark-theme')
    })
    profilePic.classList.toggle('dark-theme')
    if(profilePic.classList.contains('dark-theme')){
        profilePic.src = "./img/foto-byn.jpeg"
    }else{
        profilePic.src = "./img/foto-1.jpeg"
    }
    if(header.classList.contains('dark-theme')){
        event.currentTarget.textContent = 'Dark Mode'
    }else{
        event.currentTarget.textContent = 'Light Mode'
    }
    firstChild.classList.toggle('dark-theme')
    tecnologiesTitle.classList.toggle('dark-theme')
    projectsSection.classList.toggle('dark-theme')
}) 

    
showButton.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

window.addEventListener('scroll', () => {
    if(window.scrollY >= firstChild.offsetHeight){
        css.classList.add('css')
        html.classList.add('html')
        js.classList.add('js')
        bootstrap.classList.add('bootstrap')
    }
})



ScrollReveal().reveal('#container-info');
ScrollReveal().reveal('#tecnologies-container', {delay: 250});
ScrollReveal().reveal('#projects-container', {delay: 500});
ScrollReveal().reveal('#contact-container', {delay: 750});