window.addEventListener('load', ()=>{
    let input = document.querySelectorAll("input");
    let formulario = document.querySelector('.form-registro');
    let nombreInput = document.querySelector('#nombreRegister');
    let apellidoInput = document.querySelector('#apellidoRegister');
    let emailInput = document.querySelector('#emailRegister');
    let passwordInput = document.querySelector('#passwordRegister');
    let ulListaErrores= document.querySelector('.ulErrores');
    let imagenInput = document.querySelector(".inputRegister")
    let errores= []
    formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        ulListaErrores.innerHTML = "";


        if (errores.length > 0){
            errores = []
            // ulListaErrores=""
        }
        if(nombreInput.value==""){
            nombreInput.classList.add ('is-invalid')
            nombreInput.classList.remove ('is-valid')
            errores.push('debe escribir su nombre')
        }else{
            nombreInput.classList.add('is-valid')
            nombreInput.classList.remove('is-invalid')
        }

        if(apellidoInput.value==""){
            apellidoInput.classList.add ('is-invalid')
            apellidoInput.classList.remove ('is-valid')
            errores.push('debe escribir su apellido')
        }else{
            apellidoInput.classList.add('is-valid')
            apellidoInput.classList.remove('is-invalid')
        }

        if(emailInput.value==""){
            emailInput.classList.add ('is-invalid')
            emailInput.classList.remove ('is-valid')
            errores.push('debe escribir su email')
        }else{
            emailInput.classList.add('is-valid')
            emailInput.classList.remove('is-invalid')
        }
        //condiciones contraseña

        if(passwordInput.value==""){
            passwordInput.classList.add ('is-invalid')
            passwordInput.classList.remove ('is-valid')
            errores.push('debe escribir su constraseña')
        }else{
            passwordInput.classList.add('is-valid')
            passwordInput.classList.remove('is-invalid')
        }

        if (passwordInput.value.length < 8){
            passwordInput.classList.add ('is-invalid')
            passwordInput.classList.remove ('is-valid')
            errores.push('su contraseña debe tener mas de 8 caracteres')
        }else{
            passwordInput.classList.add('is-valid')
            passwordInput.classList.remove('is-invalid')
        }
        if(passwordInput.value.search(/[A-Z]/) < 0){
            errores.push("tu contraseña debe tener al menos una letra mayuscula")
        }
        if(passwordInput.value.search(/[0-9]/) < 0){
                errores.push("tu contraseña debe contener al menos un numero")
        }
        var archivoRuta = imagenInput.value;
        var extPermitidas = /.jpeg|.jpg/;
        if(!extPermitidas.exec(archivoRuta)){
            errores.push('Asegurese de haber seleccionado un JPEG o JPG');
        }
        
        if(errores.length > 0){
            
            for(i=0 ; i < errores.length ; i ++)
                ulListaErrores.innerHTML +='<li>'+ errores[i] +'</li>'
                ulListaErrores.setAttribute("id", "errores")
            }else{
                alert('su registro ha sido satisfactorio')
                formulario.submit()
            }
    })



})
