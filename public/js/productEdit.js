window.addEventListener('load', ()=>{
    let formulario = document.querySelector(".form-agregar-producto")
    let nombreInput = document.querySelector(".nombreEdit")
    let precioInput = document.querySelector(".precioEdit")
    let descripcionInput = document.querySelector(".descripcionEdit")
    let marcaInput = document.querySelector(".marcaEdit")
    let descuentoInput = document.querySelector(".descuentoEdit")
    let categoriaSelect = document.querySelector(".categoriaEdit")
    let imagenInput = document.querySelector(".imagenEdit")
    let stockInput = document.querySelector(".stockEdit")
    let ulListaErrores= document.querySelector('.ulErrores');
    let errores = []
    formulario.addEventListener('submit',(e)=>{

        ulListaErrores.innerHTML = "";

        e.preventDefault();

        if (errores.length > 0){
            errores = []
        }
        //ESTOS DOS ESTAN BIEN
        if(nombreInput.value=="" || nombreInput.value.length < 5 ){
            nombreInput.classList.add ('is-invalid')
            nombreInput.classList.remove ('is-valid')
            errores.push('Debe escribir un nombre con al menos 5 caracteres')
        }else{
            nombreInput.classList.add('is-valid')
            nombreInput.classList.remove('is-invalid')
        }
        if(descripcionInput.value == ''){
            descripcionInput.classList.add ('is-invalid')
            descripcionInput.classList.remove ('is-valid')
            errores.push('Debe escribir una descripcion')
        }else{
            descripcionInput.classList.add('is-valid')
            descripcionInput.classList.remove('is-invalid')
        }
        if(precioInput.value == ''){
            precioInput.classList.add ('is-invalid')
            precioInput.classList.remove ('is-valid')
            errores.push('Debe determinar un precio')
        }else{
            precioInput.classList.add('is-valid')
            precioInput.classList.remove('is-invalid')
        }
        if(marcaInput.value == ''){
            marcaInput.classList.add ('is-invalid')
            marcaInput.classList.remove ('is-valid')
            errores.push('Debe escribir una marca para su producto')
        }else{
            marcaInput.classList.add('is-valid')
            marcaInput.classList.remove('is-invalid')
        }
        if(categoriaSelect.value == "none"){
            categoriaSelect.classList.add ('is-invalid')
            categoriaSelect.classList.remove ('is-valid')
            errores.push('Debe seleccionar una categoria')
        }else{
            categoriaSelect.classList.add('is-valid')
            categoriaSelect.classList.remove('is-invalid')
        }
        if(stockInput.value==''){
            stockInput.classList.add ('is-invalid')
            stockInput.classList.remove ('is-valid')
            errores.push('Debe determinar un stock')
        }else{
            stockInput.classList.add('is-valid')
            stockInput.classList.remove('is-invalid')
        }
        if(descuentoInput.value == ''){
            descuentoInput.classList.add ('is-invalid')
            descuentoInput.classList.remove ('is-valid')
            errores.push('Debe determinar el descuento del producto')
        }else{
            descuentoInput.classList.add('is-valid')
            descuentoInput.classList.remove('is-invalid')
        }

        var archivoRuta = imagenInput.value;
        var extPermitidas = /.jpeg|.jpg/;
        if(!extPermitidas.exec(archivoRuta)){
            errores.push('Asegurese de haber seleccionado un JPEG o JPG');
        }
        
        if(errores.length > 0){
            
            for(i=0 ; i < errores.length ; i ++)
                ulListaErrores.innerHTML +='<li>'+ errores[i] +'</li>'
            }else{
                alert('Se ha editado el producto correctamente')
                formulario.submit()
            }

    // })
    // nombreInput.addEventListener('blur',()=>{
    //     if(nombreInput.value=="" || nombreInput.value.length < 5 ){
            
    //     }
    })
})