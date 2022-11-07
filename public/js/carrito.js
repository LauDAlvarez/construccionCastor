window.addEventListener('load', () => {
    let basket = JSON.parse(localStorage.getItem("data")) || []
    let cartAmount = document.querySelector('.cartAmount');
    
//actualizacion numero en el carrito
    let calculation = () => {
        cartAmount.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    }
    if (basket.length==0) {
        cartAmount.style.display = 'none'
    }else{
        cartAmount.style.display = 'block'
        calculation()
    }
    
})