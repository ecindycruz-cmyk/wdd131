
    // 1. Establecer el Año Actual
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // 2. Mostrar la Fecha de la Última Modificación
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

    // 3. Script de Demostración de Lazy Loading (Opcional, pero útil para entender)

    // Selecciona todas las imágenes con loading="lazy"
const lazyImages = document.querySelectorAll('img[data-src]');

const loadAndAnimate = (img) => {
    const dataSrc = img.getAttribute('data-src');
    if (!dataSrc) return;

    // Cuando la imagen termina de cargar, se le añade la clase .loaded
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });

    // Esto inicia la carga real de la imagen
    img.src = dataSrc;
    img.removeAttribute('data-src');
};

if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadAndAnimate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Margen de carga antes de que la imagen sea visible
        rootMargin: '0px 0px 100px 0px'
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
} else {
    // Fallback para navegadores antiguos
    lazyImages.forEach(loadAndAnimate);
}