const sections = document.getElementsByTagName('section');
const nav = document.getElementsByClassName('items');
let tarjetas = document.getElementsByClassName('tarjetas');
let fotoIndex = 0; 
Class = "";
let proyectos = document.getElementsByClassName('ProyectoItem');
let serviciosItems = document.getElementsByClassName('serviciosLista');
let serviciosFotos = document.getElementsByClassName('picItem');
let quienesSomos = document.getElementById('quienes');
let novedades = document.getElementsByClassName('novedadesProyecto');
    


window.onload = function () {
    const top = [];
    const arrayLength = sections.length;
    let scrollTop = "";
    for (var i = 0; i < arrayLength; i++) {
    let topBorder = sections[i].offsetTop; 
    let height = sections[i].offsetHeight / 2;
    let total = topBorder + height; 
    top.push(total);
    nav[0].classList.add("selectedItem");
    for (var t = 0; t < proyectos.length; t++) {
        proyectos[t].style.animationName = "appearProjects";}
    
    }
    
document.getElementById('content').addEventListener(
        'scroll',
        function()
        {
            scrollTop = document.getElementById('content').scrollTop;

            
            
            if (scrollTop <= top[0]) {
                for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                nav[0].classList.remove("unselectedItem");
                nav[0].classList.add("selectedItem");}


             else if (scrollTop <= top[1]) {
                for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                nav[1].classList.remove("unselectedItem");
                nav[1].classList.add("selectedItem");}
                
                
                else if (scrollTop <= top[2]) {
                for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                nav[2].classList.remove("unselectedItem");
                nav[2].classList.add("selectedItem")
                for (var h = 0; h < serviciosItems.length; h++) {
                    serviciosItems[h].style.animationName = "appearServices";
            }
                for (var e = 0; e < serviciosFotos.length; e++) {
                serviciosFotos[e].style.animationName = "appearServicePics"; }
            } 
            
            
                else {for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
            nav[3].classList.remove("unselectedItem")
            nav[3].classList.add("selectedItem");
            quienesSomos.style.animationName = "appearQuienes"
        }
        },

        
)

let littleSquare = document.getElementById('square');
const onMouseMove = (e) =>{
    console.log(e.pageX);
  littleSquare.style.left = e.pageX - 40 + 'px';
}

document.addEventListener('mousemove', onMouseMove);



    

}

//NEWS CAROUSEL

function nextProject() {
    for(let i = 0; i < novedades.length; i++) {
        novedades[i].setAttribute("style", "display: none");
    };
    if(novedadesIndex < novedades.length - 1) {novedadesIndex++;}
    else {novedadesIndex = 0};
    makeAppearProject();
}

function prevProject() {
    for(let i = 0; i < novedades.length; i++) {
        fotos[i].setAttribute("style", "display: none");
    };
    if(novedadesIndex > 0) {novedadesIndex--;}
    else {novedadesIndex = novedades.length - 1};
    makeAppearProject();
}

function makeAppearProject()  {
    novedades[novedadesIndex].setAttribute("style", "display: inherit; animation-name: appearPhoto; animation-duration: 0.5s; animation-fill-mode: forwards");
}



//POP UPS AND PHOTOS

function cardOpen(x) {
    document.getElementById("fondo-tarjetas").setAttribute("style", "animation-name: appearBackground; animation-duration:0.5s; animation-fill-mode: forwards");
    tarjetas[x].setAttribute("style", "animation-name: appearCard; animation-duration:0.5s; animation-fill-mode: forwards");
    Class = "foto" + x.toString();
    makeAppear();
}

function nextImg() {
    let fotos = document.getElementsByClassName(Class);
    for(let i = 0; i < fotos.length; i++) {
        fotos[i].setAttribute("style", "display: none");
    };
    if(fotoIndex < fotos.length - 1) {fotoIndex++;}
    else {fotoIndex = 0};
    makeAppear();
}

function prevImg() {
    let fotos = document.getElementsByClassName(Class);
    for(let i = 0; i < fotos.length; i++) {
        fotos[i].setAttribute("style", "display: none");
    };
    if(fotoIndex > 0) {fotoIndex--;}
    else {fotoIndex = fotos.length - 1};
    makeAppear();
}

function makeAppear()  {
    let fotos = document.getElementsByClassName(Class);
    fotos[fotoIndex].setAttribute("style", "display: inherit; animation-name: appearPhoto; animation-duration: 0.5s; animation-fill-mode: forwards");
}


function closeCard() {
    document.getElementById("fondo-tarjetas").setAttribute("style", "display:none");
    for(let i = 0; i < tarjetas.length; i++){
        tarjetas[i].scrollTop = 0;
        tarjetas[i].setAttribute("style", "display:none");
    }

    let fotos = document.getElementsByClassName(Class);
    for(let i = 0; i < fotos.length; i++) {
        fotos[i].setAttribute("style", "opacity: 0");
    };

    fotoIndex = 0; 
}










