const menu = document.querySelector("#mobile_menu")
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is_active')
    menuLinks.classList.toggle('active')
})