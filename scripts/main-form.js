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

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function populateProductDropdown() {
    const selectElement = document.getElementById('product-name');

    products.forEach(product => {
        const option = document.createElement('option');

        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);

        option.value = product.id;
        selectElement.appendChild(option);
    });
}

function updateLastModified() {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}


function updateReviewCounter() {
    const counterDisplay = document.getElementById('review-counter');
    if (counterDisplay) {

        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) : 0;


        reviewCount++;

        localStorage.setItem('reviewCount', reviewCount);


        counterDisplay.textContent = reviewCount;
    }
}


document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById('review-form')) {
        populateProductDropdown();
        updateLastModified();
    }
    // Run on review.html
    else if (document.getElementById('review-confirmation')) {
        updateReviewCounter();
        updateLastModified();
    }
});