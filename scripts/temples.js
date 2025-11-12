const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('main-nav');

function toggleMenu() {
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
        menuToggle.innerHTML = '❌';
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

menuToggle.addEventListener('click', toggleMenu);


const yearElement = document.getElementById("currentyear");

const currentYear = new
    Date().getFullYear();

if (yearElement) {
    yearElement.textContent = currentYear;
}

const modifiedElement = document.getElementById("lastModified");

if (modifiedElement) {
    modifiedElement.textContent += document.lastModified;
}