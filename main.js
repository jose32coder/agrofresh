// Inicializa Swiper
function initializeSwiper() {
    // Crea una instancia de Swiper y configura las opciones
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Permite que el carrusel sea cíclico
        navigation: {
            nextEl: '.swiper-button-next', // Elemento para el botón de siguiente
            prevEl: '.swiper-button-prev', // Elemento para el botón de anterior
        },
        pagination: {
            el: '.swiper-pagination', // Elemento para la paginación
            clickable: true, // Permite hacer clic en los puntos de paginación
        },
        slidesPerView: 1, // Muestra una imagen a la vez
    });
}

// Llama a la función para inicializar Swiper cuando la página esté lista
document.addEventListener('DOMContentLoaded', initializeSwiper);
