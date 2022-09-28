window.addEventListener('load', ()=>{
    let emailInput = document.querySelector('#email-login');
    let passwordInput = document.querySelector('#password-login');
    let formulario = document.querySelector('.form-login');
    let textoErrorEmail = document.querySelector('.textoErrorEmail')
    let textoErrorPassword = document.querySelector('.textoErrorPassword')
    formulario.addEventListener('submit', (e)=>{

        e.preventDefault();

        if(emailInput.value==""){
            emailInput.classList.add ('is-invalid')
            emailInput.classList.remove ('is-valid')
            textoErrorEmail.innerHTML = ('debe escribir su email')
        }else{
            emailInput.classList.add('is-valid')
            emailInput.classList.remove('is-invalid')
        }
        
        if(passwordInput.value==""){
            passwordInput.classList.toggle ('is-invalid')
            passwordInput.classList.remove ('is-valid')
            textoErrorPassword.innerHTML='debe escribir su contraseña'
        }else{
            passwordInput.classList.add('is-valid')
            passwordInput.classList.remove('is-invalid')
        }
//  
        // if(errores.length > 0){

        //     for(i=0 ; i < errores.length ; i ++)
        //         ulListaErrores.innerHTML +='<li>'+ errores[i] +'</li>'
        //     }else{
        //         alert('su registro ha sido satisfactorio')
        //         formulario.submit()
        //  email})
    })
})