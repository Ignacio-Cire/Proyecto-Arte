$(document).ready(function() {
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
    });
});


//nav none scroll

// Detectar el tamaño de la pantalla
function isDesktop() {
    return window.innerWidth >= 768; // Ajusta el valor de acuerdo al diseño
}

// Controlar el scroll y la visibilidad del nav
let scrollTimeout;
let mouseMoveTimeout;

function handleScroll() {
    if (isDesktop()) {
        clearTimeout(scrollTimeout);
        document.querySelector('.nav').style.top = '0';
        scrollTimeout = setTimeout(() => {
            document.querySelector('.nav').style.top = '-120px'; // Ajusta la altura del nav
        }, 1000); // Desaparece después de 1 segundo
    }
}

function handleMouseMove() {
    if (isDesktop()) {
        clearTimeout(mouseMoveTimeout);
        document.querySelector('.nav').style.top = '0';
        mouseMoveTimeout = setTimeout(() => {
            document.querySelector('.nav').style.top = '-120px'; // Ajusta la altura del nav
        }, 1000); // Desaparece después de 1 segundo
    }
}

// Añadir eventos de scroll, resize y mousemove
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', () => {
    // Resetear el estado cuando cambie el tamaño de la ventana
    if (!isDesktop()) {
        document.querySelector('.nav').style.top = '0'; // Asegura que el nav esté visible en móviles
    }
});
window.addEventListener('mousemove', handleMouseMove);



//SCROLL SUAVE


    $(document).ready(function () {
        // Selecciona todos los enlaces que comienzan con un "#"
        $('a[href^="#"]').on('click', function (event) {
            // Previene el comportamiento por defecto
            event.preventDefault();

            // Guarda el destino del enlace en una variable
            var target = this.hash;
            var $target = $(target);

            // Anima el scroll hacia el destino
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 800, function () {
                // Cambia el foco de la URL al destino
                window.location.hash = target;
            });
        });
    });




