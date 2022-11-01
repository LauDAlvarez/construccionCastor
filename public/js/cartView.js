// window.addEventListener('load', () => {
let basket = JSON.parse(localStorage.getItem("data")) || []
let cartAmount = document.querySelector('.cartAmount');
let producto = document.querySelectorAll('.cartProduct')
let idItemsLocalStorage = []
// let productPrice = document.querySelectorAll('.precio')

//mostrar los productos que corresponden
let searchBasketId = () => { basket.forEach((x) => idItemsLocalStorage.push(x.id)) }
//funcion para solo mostrar los productos de la canasta
updateItems = () => {
    searchBasketId()
    idItemsLocalStorage.forEach(id => {
        let search = basket.find((x) => x.id === id);
        Array.from(producto).forEach((product) => {
            if (product.children[0].children[0].innerHTML == id) {
                //agrego numero de cantidad
                product.children[0].children[2].children[1].innerHTML = search.item
                //modifico numero de precio
                product.children[0].children[2].children[3].innerHTML =
                    (product.children[0].children[2].children[1].textContent
                        *
                        product.children[0].children[2].children[3].textContent)
                product.style.display = 'block';
            }
        })
    })
}

updateItems()
//funcion para sumar todos los items de la canasta priceToPay
let totalPriceToPay = document.querySelector('.priceToPay')
let calculateTotalAmount = () => {
    let totalApagar = []
    idItemsLocalStorage.forEach(id => {
        let search = basket.find((x) => x.id === id);
        Array.from(producto).forEach((product) => {
            if (product.children[0].children[0].innerHTML == id) {
                //modifico numero de precio
                let pricePerProduct = product.children[0].children[2].children[3].textContent
                totalApagar.push(parseInt(pricePerProduct));
            }
        })
    })
    let tootal = totalApagar.reduce((x, y) => x + y, 0)
    totalPriceToPay.innerHTML = '$'+ tootal
}
calculateTotalAmount()




//funcion para que se actualice num de icono del carrito
let calculation = () => {
    cartAmount.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}


//logica de boton SUMAR
let buttonIncrement = document.querySelectorAll(".btn-der")

for (var i = 0; i < buttonIncrement.length; i++) {
    buttonIncrement[i].addEventListener('click', function (event) {

        //id del item
        let selectedItemId = event.target.parentElement.parentElement.children[0].innerHTML

        //busco en la basket el elemento que necesito 
        let search = basket.find((x) => x.id === parseInt(selectedItemId));

        //le agrego 1 a el item por cada click
        search.item += 1;

        //actualizar cantidad de cada producto
        let selectedItemQuantity = event.target.parentElement.children[1]
        let updateItem = () => {
            selectedItemQuantity.textContent = (selectedItemQuantity.innerHTML = search.item)
        }
        //actualizo precio del producto al hacer click

        let productPrice = event.target.parentElement.children[3]
        let updatePrice = () => {
            let realProductPrice = productPrice.textContent / (selectedItemQuantity.textContent)
            let finalPrice = (realProductPrice) * (selectedItemQuantity.textContent) + realProductPrice
            event.target.parentElement.children[3].innerHTML = finalPrice
        }
        //funcion para el precio
        updatePrice()
        //funcion para la cantidad de item
        updateItem()


        //actualizo localstorage
        localStorage.setItem("data", JSON.stringify(basket));


        //actualizacion numero en el icono carrito calculation()
        calculation()
        calculateTotalAmount()

    });
}
//funcion boton RESTAR
let buttonDecrement = document.querySelectorAll(".btn-izq")

for (var i = 0; i < buttonDecrement.length; i++) {
    buttonDecrement[i].addEventListener('click', function (event) {
        //id del item
        let selectedItemId = event.target.parentElement.parentElement.children[0].innerHTML
        //busco en la basket el elemento que necesito 
        let search = basket.find((x) => x.id === parseInt(selectedItemId));
        //le agrego 1 a el item por cada click

        if (search.item === 0) {
            return
        } else {
            search.item -= 1;
        }
        // if(event.target.parentElement.children[1].textContent == 0){
        //     event.target.parentElement.parentElement.parentElement.style.display = 'none'
        // }
        
        //actualizo cantidad del producto
        let selectedItemQuantity = event.target.parentElement.children[1]
        let updateItem = () => {
            selectedItemQuantity.textContent = (selectedItemQuantity.innerHTML = search.item)
        }
        //actualizo precio del producto al hacer click

        let productPrice = event.target.parentElement.children[3]
        let updatePrice = () => {
            let realProductPrice = productPrice.textContent / (selectedItemQuantity.textContent)
            let finalPrice = realProductPrice * (selectedItemQuantity.textContent - 1)
            event.target.parentElement.children[3].innerHTML = finalPrice

        }

        updatePrice()
        updateItem();
        if(event.target.parentElement.children[1].textContent == 0){
            event.target.parentElement.parentElement.parentElement.style.display = 'none'
        }
        //saco del localstorage los elementos que tienen 0
        basket = basket.filter((x) => x.item != 0)
        //actualizo localstorage
        localStorage.setItem("data", JSON.stringify(basket));
        //actualizacion numero en el icono carrito calculation()
        calculation();
        calculateTotalAmount()
    });
}

