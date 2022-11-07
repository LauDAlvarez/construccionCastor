window.addEventListener('load', () => {
    
    let basket = JSON.parse(localStorage.getItem("data")) || []
    let botonSumar = document.querySelector('.btn-der');
    let botonRestar = document.querySelector('.btn-izq');
    let sku = document.querySelector('.pepe').textContent;
    let quantity = document.querySelector('.quantity');
    let cartAmount = document.querySelector('.cartAmount');

    botonSumar.addEventListener('click', () => {
        increment()
    });
    botonRestar.addEventListener('click', () => {
        decrement()
    });

    let increment = () => {
        let search = basket.find((x) => x.id === parseInt(sku));
        if (search == undefined) {
            basket.push({
                id: parseInt(sku),
                item: 1,
            })
        }
        else {
            search.item += 1;
        };
        update();
        localStorage.setItem("data", JSON.stringify(basket))
        calculation()
    };


    let decrement = () => {
        let search = basket.find((x) => x.id === parseInt(sku));
        if (search===undefined) {
            return
        }
        else if (search.item === 0) {
            return
        }
        else {
            search.item -= 1;
        };
        update();
        basket = basket.filter((x)=>x.item !==0);
        localStorage.setItem("data", JSON.stringify(basket));
        calculation();
    };
//actualizacion numero entre + y -
    let update = () => {
        let searchUpdate = basket.find((x) => x.id == parseInt(sku));
        if(searchUpdate !== undefined){
            quantity.textContent = (quantity.textContent.innerHTML = searchUpdate.item);
        }
    };
//actualizacion numero en el carrito
    let calculation = () => {
        cartAmount.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
        if (basket.length==0) {
        cartAmount.style.display = 'none'
        }else{
            cartAmount.style.display = 'block'
        }
    }

    calculation()
    update()
})