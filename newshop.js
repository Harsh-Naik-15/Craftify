import newproducts from '/newproducts.js';
import newcart from './newcart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load layout file
const loadTemplate = () => {
    fetch('/newtemplate.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        newcart();
        initApp();
    })
}
loadTemplate();
const initApp = () => {
     // load list product
     let listProductHTML = document.querySelector('.listProduct');
     listProductHTML.innerHTML = null;
     
     newproducts.forEach(product => {
         let newProduct = document.createElement('div');
         newProduct.classList.add('item');
         newProduct.innerHTML = 
         `<a href="/newdetails.html?id=${product.id}">
             <img src="${product.image}">
         </a>
         <h2>${product.name}</h2>
         <div class="price">Rs.${product.price}</div>
         <button 
             class="addCart" 
             data-id='${product.id}'>
                 Add To Cart
         </button>`;
         listProductHTML.appendChild(newProduct);
    });
}