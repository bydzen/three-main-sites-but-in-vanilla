// Navigation Bar
// Navigation Hamburger Menu Toggle
const navigationMenu = document.querySelector('ul:nth-child(2)')
// Toggle Hamburger Menu
document.querySelector('.hamburger-menu').onclick = () => {
    navigationMenu.classList.toggle('hamburger-active')
}
// Navigation Hamburger Menu Closed on Any Click Execpt the Hamburger Stack
const HamburgerMenu = document.querySelector('.hamburger-menu')
// Toggle Hamburger Menu Close
document.addEventListener('click', function (e) {
    if (!HamburgerMenu.contains(e.target) && !navigationMenu.contains(e.target)) {
        navigationMenu.classList.remove('hamburger-active')
    }
})
