const email = document.querySelector('.narbar-email');
const menu = document.querySelector('.desktop-menu');

email.addEventListener('click', toggledesktop_menu);

function toggledesktop_menu() {
    menu.classList.toggle('inactive')
}