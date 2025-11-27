const temples = [
    {
        templeName: "San Salvador El Salvador",
        location: "Antiguo Cuscatlán, El Salvador",
        dedicated: "2011, August, 21",
        area: 27986,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-salvador-el-salvador/800x500/san-salvador-el-salvador-temple-lds-848573-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 11610,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/800x500/guatemala-city-temple-lds-829605-wallpaper.jpg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/320x200/paris-france-temple-exterior-evening-1905504.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
];

const mainNav = document.getElementById('main-nav');
const menuToggle = document.getElementById('menu-toggle');
const imagesContainer = document.querySelector('.images');
const mainHeading = document.querySelector('main h2');


function toggleMenu() {
    mainNav.classList.toggle('show');

    if (mainNav.classList.contains('show')) {
        menuToggle.innerHTML = '❌';
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}
menuToggle.addEventListener('click', toggleMenu);


function createTempleCard(temple) {
    const card = document.createElement('section');
    card.classList.add('temple-card');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.innerHTML = `<strong>LOCATION:</strong> ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>DEDICATED:</strong> ${temple.dedicated}`;

    const area = document.createElement('p');
    area.innerHTML = `<strong>SIZE:</strong> ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    return card;
}

function displayTemples(filteredTemples) {
    imagesContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
        imagesContainer.appendChild(createTempleCard(temple));
    });
}

document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        if (mainNav.classList.contains('show') && window.innerWidth < 768) {
            toggleMenu();
        }

        const filterType = event.target.title;
        mainHeading.textContent = filterType;

        let filteredTemples = [];

        switch (filterType) {
            case 'Home':
                filteredTemples = temples;
                break;
            case 'Old':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case 'New':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case 'Large':
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case 'Small':
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples;
                break;
        }

        displayTemples(filteredTemples);

        document.querySelectorAll('#main-nav a').forEach(a => a.classList.remove('active'));
        event.target.classList.add('active');
    });
});

const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();

if (yearElement) {
    yearElement.textContent = currentYear;
}

const modifiedElement = document.getElementById("lastModified");

if (modifiedElement) {
    modifiedElement.textContent += document.lastModified;
}

displayTemples(temples);
document.querySelector('#main-nav a[title="Home"]').classList.add('active');