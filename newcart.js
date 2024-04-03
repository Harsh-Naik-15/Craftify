import newproducts from "./newproducts.js";
const newcart = () => {
    let listCartHTML = document.querySelector('.listCart');
    let iconCart = document.querySelector('.icon-cart');
    let iconCartSpan = iconCart.querySelector('span');
    let body = document.querySelector('body');
    let closeCart = document.querySelector('.close');
    let newcart = [];

    // open and close tab
    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    })
    closeCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    })

    const setProductInCart = (idProduct, value) => {
        let positionThisProductInCart = newcart.findIndex((value) => value.product_id == idProduct);
        if(value <= 0){
            newcart.splice(positionThisProductInCart, 1);
        }else if(positionThisProductInCart < 0){
            newcart.push({
                product_id: idProduct,
                quantity: 1
            });
        }else{
            newcart[positionThisProductInCart].quantity = value;
        }
        localStorage.setItem('newcart', JSON.stringify(newcart));
        addCartToHTML();
    }

    const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        let totalQuantity = 0;
        if(newcart.length > 0){
            newcart.forEach(item => {
                totalQuantity = totalQuantity +  item.quantity;
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.dataset.id = item.product_id;
    
                let positionProduct = newproducts.findIndex((value) => value.id == item.product_id);
                let info = newproducts[positionProduct];
                listCartHTML.appendChild(newItem);
                newItem.innerHTML = `
                <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice">Rs.${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus" data-id="${info.id}">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-id="${info.id}">+</span>
                    </div>
                `;
            })
        }
        iconCartSpan.innerText = totalQuantity;
    }

    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        let quantity = null;
        let positionProductInCart = newcart.findIndex((value) => value.product_id == idProduct);
        switch (true) {
            case (buttonClick.classList.contains('addCart')):
                quantity = (positionProductInCart < 0) ? 1 : newcart[positionProductInCart].quantity+1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('minus')):
                quantity = newcart[positionProductInCart].quantity-1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('plus')):
                quantity = newcart[positionProductInCart].quantity+1;
                setProductInCart(idProduct, quantity);
                break;
            default:
                break;
        }
    })

    const initApp = () => {
        
    if(localStorage.getItem('newcart')){
        newcart = JSON.parse(localStorage.getItem('newcart'));
        addCartToHTML();
    }
    }
    initApp();
}
export default newcart;