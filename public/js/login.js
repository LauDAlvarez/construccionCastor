// let emailInput = document.querySelector('#email-login');
// let passwordInput = document.querySelector('#password-login');
// let formulario = document.querySelector('.formularioLogin');


// formulario.addEventListener('submit', (e){
//     e.preventDefault();

//     if(nombreInput.value==""){
//         nombreInput.classList.add ('is-invalid')
//         nombreInput.classList.remove ('is-valid')
//         errores.push('debe escribir su nombre')
//     }else{
//         nombreInput.classList.add('is-valid')
//         nombreInput.classList.remove('is-invalid')
//     },

//     if(passwordInput.value==""){
//         passwordInput.classList.add ('is-invalid')
//         passwordInput.classList.remove ('is-valid')
//         errorVacio()
//     }else{
//         passwordInput.classList.add('is-valid')
//         passwordInput.classList.remove('is-invalid')
//     }

//     if(errores.length > 0){
//         errores.innerHTML=""
//         for(i=0 ; i < errores.length ; i ++)
//             ulListaErrores.innerHTML +='<li>'+ errores[i] +'</li>'
//         }else{
//             formulario.submit()
//             alert('su registro ha sido satisfactorio')
//         }
// })