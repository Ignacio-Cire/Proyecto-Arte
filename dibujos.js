/*EFECTO CARRUSEL DE FOTOS*/

let indiceActual = 0;  // Índice inicial
const slides = document.querySelectorAll('.carousel-item'); // Obtiene todos los elementos del carrusel
const totalSlides = slides.length;
const intervaloCambio = 3000; // Tiempo en milisegundos entre cada cambio automático

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const botonAnterior = document.querySelector('.carousel-control.prev');
    const botonSiguiente = document.querySelector('.carousel-control.next');
    let indiceActual = 0;

    // Función para mostrar el slide en la posición especificada
    function mostrarSlide(indice) {
        if (indice >= totalSlides) {  // Si el índice es mayor o igual al total de slides, vuelve al primero
            indice = 0;
        } else if (indice < 0) {  // Si el índice es menor que cero, muestra el último slide
            indice = totalSlides - 1;
        }
        indiceActual = indice;
        carousel.style.transform = `translateX(-${indiceActual * 100}%)`;  // Mueve el carrusel horizontalmente
    }

    // Función para mostrar el siguiente slide
    function siguienteSlide() {
        mostrarSlide(indiceActual + 1);
    }

    // Función para mostrar el slide anterior
    function anteriorSlide() {
        mostrarSlide(indiceActual - 1);
    }

    // Eventos para los botones de control
    botonSiguiente.addEventListener('click', siguienteSlide);
    botonAnterior.addEventListener('click', anteriorSlide);

    // Cambio automático cada intervaloCambio milisegundos
    setInterval(siguienteSlide, intervaloCambio);

    // Muestra inicialmente el primer slide
    mostrarSlide(indiceActual);
});

    