document.addEventListener('DOMContentLoaded', () => {

    // FUNCIÓN: Menú Hamburguesa (DOM Interaction, Event Listener)
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    const toggleMenu = () => {
        // Modifying DOM: Alternar clase 'active'
        mobileMenu.classList.toggle('active');
    };
    
    // Listening for and Reacting to Events
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }


    //  FUNCIÓN: Lazy Loading de Imágenes (DOM Interaction)
    const lazyImages = document.querySelectorAll('img.lazy');

    if ('IntersectionObserver' in window) {
        let lazyLoadObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    const dataSrc = lazyImage.dataset.src;

                    if (dataSrc) {
                        // Modifying DOM: Cambiar el atributo src por el data-src
                        lazyImage.src = dataSrc;
                        lazyImage.classList.remove('lazy');
                        observer.unobserve(lazyImage);
                    }
                }
            });
        });

        lazyImages.forEach(image => {
            lazyLoadObserver.observe(image);
        });
    } else {
        lazyImages.forEach(image => {
            const dataSrc = image.dataset.src;
            if (dataSrc) {
                image.src = dataSrc;
                image.classList.remove('lazy');
            }
        });
    }


    const contactForm = document.getElementById('contact-form');
    const formOutput = document.getElementById('form-output');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;

        // Conditional Branching: basic validation
        if (!name || !phone || !email || !comment) {
            formOutput.innerHTML = `
                <p class="error-message">🛑Please complete all fields of the form.</p>
            `;
            return;
        }

        const userData = {
            id: Date.now(),
            name: name,
            phone: phone,
            email: email,
            comment: comment,
            timestamp: new Date().toLocaleString()
        };

        let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');

        // Array Method: Add the new object to the array
        submissions.push(userData);

        // Array en localStorage
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

        const outputString = `
            <div class="success-message">
                ✅ Thank you!, ${userData.name}! Your request has been sent.
                <p>We will contact you soon via email: ${userData.email}</p>
                <p class="small-text">Your comment: ${userData.comment.substring(0, 50)}</p>
                <p class="small-text">Pending applications: ${submissions.length}</p>
            </div>
        `;

        formOutput.innerHTML = outputString;

        contactForm.reset();
    };

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    const yearElement = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    const modifiedElement = document.getElementById("lastModified");

    if (modifiedElement) {
        modifiedElement.textContent += document.lastModified;
    }
});