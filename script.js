document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navbar = document.querySelector('.navbar');
    var logoImage = document.querySelector('.navbar .logo img');
    var videoHeight = document.querySelector('.video-background').offsetHeight;

    function updateNavbar() {
        var scrollPosition = window.scrollY;

        if (menuToggle.checked) {
            navbar.style.backgroundColor = 'white'; // Change navbar background color when burger menu is checked
            logoImage.src = 'image/logo3.svg'; // Change to your scrolled logo

        } else {
            if (scrollPosition > 12) {
                navbar.classList.add('scrolled');
                navbar.style.backgroundColor = 'white'; // Background color when scrolled past the video
                logoImage.src = 'image/logo3.svg'; // Change to your scrolled logo
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.backgroundColor = 'transparent'; // Background color when at the top
                logoImage.src = 'image/logo2.svg'; // Original logo
            }
        }
    }

    // Add event listeners
    menuToggle.addEventListener('change', updateNavbar);
    document.addEventListener('scroll', updateNavbar);
});
