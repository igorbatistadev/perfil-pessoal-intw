const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const sectionId = link.getAttribute('href');

        const section = document.querySelector(sectionId);

        section.scrollIntoView({ behavior: 'smooth' });
    });
});
