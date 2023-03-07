const email = document.querySelector('.narbar-email');
const menu = document.querySelector('.desktop-menu');
const iconmenucelular = document.querySelector('.image');
const iconmenucarrito = document.querySelector('.carrito');
const aside = document.querySelector('.product-detail');
const menucelular = document.querySelector('.mobile-menu');



email.addEventListener('click', toggledesktop_menu);
iconmenucelular.addEventListener('click', togglecelular_menu);
iconmenucarrito.addEventListener('click', toggleCarritoAsade)


function toggledesktop_menu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')    
    }
    menu.classList.toggle('inactive')
}

function togglecelular_menu() {

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')    
    }

    menucelular.classList.toggle('inactive')
}

function toggleCarritoAsade() {

    const isMobilMenuClosed = menucelular.classList.contains('inactive');

    if (!isMobilMenuClosed) {
        menucelular.classList.add('inactive')    
    }

    aside.classList.toggle('inactive')
}