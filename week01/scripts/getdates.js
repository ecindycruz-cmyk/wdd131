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