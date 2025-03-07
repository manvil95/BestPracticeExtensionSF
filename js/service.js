document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton   = document.getElementById("backToTop");
    const nav               = document.querySelector("nav");
    const hamburgerMenu     = document.getElementById("hamburgerMenu");
    
    window.addEventListener("scroll", function() {
        // Obtener la altura del nav
        const navHeight = nav.offsetHeight;
        
        if (window.scrollY > navHeight) {
            nav.classList.add('fixed-nav');
            hamburgerMenu.classList.add('hamburguer-menu-fadeIn');
            hamburgerMenu.classList.remove('hamburguer-menu-fadeOut');
        } else {
            nav.classList.remove('fixed-nav');
            hamburgerMenu.classList.add('hamburguer-menu-fadeOut');
            hamburgerMenu.classList.remove('hamburguer-menu-fadeIn');
        }
        // Mostrar el botón al pasar el nav
        if (window.scrollY > navHeight) {
            backToTopButton.classList.add('fadeIn');
            backToTopButton.classList.remove('fadeOut');
        } else {
            backToTopButton.classList.add('fadeOut');
            backToTopButton.classList.remove('fadeIn');
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});