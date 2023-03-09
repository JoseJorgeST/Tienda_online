const email = document.querySelector('.narbar-email');
const menu = document.querySelector('.desktop-menu');
const iconmenucelular = document.querySelector('.image');
const iconmenucarrito = document.querySelector('.carrito');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const menucelular = document.querySelector('.mobile-menu');

const cardsContainer = document.querySelector('.cards-container');

email.addEventListener('click', toggledesktop_menu);
iconmenucelular.addEventListener('click', togglecelular_menu);
iconmenucarrito.addEventListener('click', toggleCarritoAsade);
productDetailCloseIcon.addEventListener('click', closeProductdetailAside);


function toggledesktop_menu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')    
    }
    closeProductdetailAside();
    menu.classList.toggle('inactive')
}

function togglecelular_menu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')    
    }
    closeProductdetailAside();

    menucelular.classList.toggle('inactive')
}

function toggleCarritoAsade() {

    const isMobilMenuClosed = menucelular.classList.contains('inactive');

    if (!isMobilMenuClosed) {
        menucelular.classList.add('inactive')    
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')    
    }


    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductdetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productlist = [];
productlist.push({
    name: 'Sueter',
    price: '50.000',
    image: 'img/Sueter.jpg'
});
productlist.push({
    name: 'otro',
    price: '50.000',
    image: 'img/Sueter.jpg'
});
productlist.push({
    name: 'sueneeer',
    price: '50.000',
    image: 'img/Sueter.jpg'
});
productlist.push({
    name: 'ñueeeee',
    price: '50.000',
    image: 'img/Sueter.jpg'
});



function renderProduct(arr) {
    for( product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetailAside);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'img/carrito-de-compras.png');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
    
    }

}

renderProduct(productlist);