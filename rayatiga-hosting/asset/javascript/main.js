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
// Modal
// Get All Modal Button
const modalButton = document.querySelectorAll('#modalButton')
// Set All Modal Button List
const modalButtonList = Array.from(modalButton)
// Set Each Modal Button List
modalButtonList.forEach((btn) => {
    // Set Function Each Modal Button List
    btn.onclick = function () {
        // Get Modal Data Attribute
        const modalData = btn.getAttribute('modal-data')
        // Set Modal Element from Modal Data
        const modalElement = document.getElementById(modalData)
        // Set Modal Element add Class
        modalElement.classList.add('modal-open')
    }
})
// Get All Modal Span Close Button
const closeButtonList = Array.from(document.querySelectorAll('span'))
// Set All Modal Span Close Button List
closeButtonList.forEach((btn) => {
    // Set Function Each Modal Span Close Button List
    btn.onclick = function () {
        // Set Modal Element from Modal Class
        let modalElement = btn.closest('.modal')
        // Set Modal Element Remove Class
        modalElement.classList.remove('modal-open')
    }
})
// Get All Click in Window Outside Modal
window.onclick = function (event) {
    // Set Modal Open Contain Class
    modalOpen = event.target.classList.contains('modal-open')
    // Get Modal Class Open
    if (modalOpen) {
        // Set Modal Element Remove Class
        event.target.classList.remove('modal-open')
    }
}
