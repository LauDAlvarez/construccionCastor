
window.addEventListener('load', ()=>{
    const imgsC = ['/images/fotoCarrusel1.jpeg','/images/fotoCarrusel2.jpg','/images/fotoCarrusel4.jpg'];//BASE DE DATOS
    let contImg = document.querySelector('#contImg')
    let contBtns = document.querySelector('ul.btns')
    let cantImg = imgsC.length;
    
    //IMAGENES CARRUSEL 
    for(let i=0; i < cantImg-1 ; i++){
        let imgAdd = document.createElement('div');
        imgAdd.classList.add('imgCarrusel');
        contImg.appendChild(imgAdd);
    }

    contImg.setAttribute('style', "width: calc(100% * "+cantImg+")")

    let imgC = document.querySelectorAll('.contImg .imgCarrusel');
    imgC.forEach((img , i) => {
        console.log(img)
        img.style.width = '100%';
        img.style.height = '20vh';
        img.style.backgroundImage = 'url('+ imgsC[i] +')';
    })


    // BOTONES CARRUSEL
    let btns = document.querySelectorAll('.btns li');
    if(btns.length < cantImg){
        for(let i=0; i < cantImg-btns.length ; i++){
            let btnAdd = document.createElement('li');
            btnAdd.classList.add('btn');
            contBtns.appendChild(btnAdd);
        }
    }
    let allBtns = document.querySelectorAll('.btns li');
    
    allBtns.forEach((bts, i)=>{
        bts.addEventListener('click',()=>{
            allBtns.forEach((b , j )=>{
                b.classList.remove('active');
                imgC[j].style.width = '0%';
            })
            bts.classList.add('active');
            imgC[i].style.width = '100%';
        })  
    })

    

})