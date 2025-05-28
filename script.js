document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', function () {
            navLinks.classList.toggle('hidden');
            // Optional: Change icon to 'X' when open
            // This requires more complex SVG handling or two SVGs
        });
    }
});
