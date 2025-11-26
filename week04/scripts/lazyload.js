

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;


const lazyImages = document.querySelectorAll('img[data-src]');

const loadAndAnimate = (img) => {
    const dataSrc = img.getAttribute('data-src');
    if (!dataSrc) return;

    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });

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

        rootMargin: '0px 0px 100px 0px'
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
} else {

    lazyImages.forEach(loadAndAnimate);
}