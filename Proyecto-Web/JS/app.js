//Slides de los Valores
//------------------------------
$('.slide').hiSlide();

var intervalo;

$('.hi-next, .hi-prev').on('click', function() {
    clearInterval(intervalo); // Limpiar el intervalo actual
    intervalo = setInterval(function() {
        $('.hi-next').trigger('click'); // Avanzar al siguiente slide
    }, 5000); // Cambiar cada 3 segundos (ajusta este valor según tus preferencias)
});

// Iniciar el intervalo automáticamente al cargar la página
$(document).ready(function() {
    intervalo = setInterval(function() {
        $('.hi-next').trigger('click'); // Avanzar al siguiente slide
    }, 15000); // Cambiar cada 3 segundos (ajusta este valor según tus preferencias)
});

//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".proyectos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

//función que muestra el menu responsive{
    function responsiveMenu(){
        let x = document.getElementById("nav");
        if(x.className===""){
            x.className = "responsive";
    
            //creamos el elemento que cierra el menu
            let span = document.createElement("span");
            span.innerHTML = "X";
            document.getElementById("nav").appendChild(span);
    
            //quitamos el boton eliminar cuando se hace click sobre este
            span.onclick = function(){
                x.className = "";
                span.remove();
            }
        }else{
            x.className="";
        }
    }
    
    //Este codigo es para agregar una función a cada links del menu
    //responsive
    //cuando se presione en cualquier de los links del menu debe desaparecer el menu
    const links = document.querySelectorAll("#nav a");
    for(i=0; i < links.length;i++){
        links[i].onclick = function(){
            var x = document.getElementById("nav");
            x.className = "";
    
            //removemos el boton eliminar
            btnEliminar = document.querySelector("#nav span");
            btnEliminar.remove();
        }
    }

// BOTÓN DE SCROLL
//-------------------------------------------------------------------------------------
// Obtener el botón de scroll
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Función para mostrar u ocultar el botón de scroll según la posición de la página
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Función para desplazarse suavemente hacia arriba cuando se hace clic en el botón
scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};


document.getElementById('icono-nav').addEventListener('click', function() {
    document.getElementById('Nav').classList.toggle('mostrar-nav');
  });