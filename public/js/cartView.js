// window.addEventListener('load', () => {
let basket = JSON.parse(localStorage.getItem("data")) || []
let cartAmount = document.querySelector('.cartAmount');
let producto = document.querySelectorAll('.cartProduct')
let idItemsLocalStorage = []
// let productPrice = document.querySelectorAll('.precio')

//mostrar los productos que corresponden
let searchBasketId = () => { basket.forEach((x) => idItemsLocalStorage.push(x.id)) }

updateItems = () => {
    searchBasketId()
    // console.log(idItemsLocalStorage)
    idItemsLocalStorage.forEach(id => {
        let search = basket.find((x) => x.id === id);
        Array.from(producto).forEach((x) => {
            if (x.children[0].children[0].innerHTML == id) {
                x.style.display = 'block';
                x.children[0].children[2].children[1].innerHTML = search.item
                // console.log(x.children[0].children[2].children[1].innerHTML)
            }
        })
    })
}

updateItems()


//funcion para que se actualice num de icono del carrito
let calculation = () => {
    cartAmount.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}


//logica de botones + y -
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
        updateItem()
        
        //actualizo localstorage
        localStorage.setItem("data", JSON.stringify(basket));
        
        
        //actualizacion numero en el carrito
        calculation()
    });
}



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

        //actualizo cantidad del producto
        let selectedItemQuantity = event.target.parentElement.children[1]
        let updateItem = () => {
            selectedItemQuantity.textContent = (selectedItemQuantity.innerHTML = search.item)
        }
        updateItem();

        //saco del localstorage los elementos que tienen 0
            basket = basket.filter((x) => x.item != 0)
            //actualizo localstorage
            localStorage.setItem("data", JSON.stringify(basket));
            //actualizo icono carrito
            calculation()
    });
}
// })

// let cantidad = document.querySelectorAll('.quantity')

// console.log(cantidad)
// let productSearch = producto.find((x) => x.children[0].children[0].innerHTML == 1)
// console.log(productSearch)


// let search = basket.find((x) => x.id === );
// console.log(search)








// updateItems()
// };

