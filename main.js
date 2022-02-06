const darkModeButton = document.querySelector('#theme')
const header = document.querySelector('header')
const body = document.body
const footer = document.querySelector('footer')

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