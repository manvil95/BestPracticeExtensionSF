document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const nav = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const buInput = document.getElementById("bu-input");

    // Almacenar el valor original de {{BU}} en un atributo data-original
    const buElements = document.querySelectorAll("[data-bu]");
    buElements.forEach((element) => {
        element.setAttribute("data-original", element.textContent); // Guardar el valor original
    });

    // Cargar el valor guardado en localStorage (si existe)
    const savedBUValue = localStorage.getItem("buValue");
    if (savedBUValue) {
        buInput.value = savedBUValue; // Establecer el valor en el input
        updateBUValue(savedBUValue); // Actualizar los elementos con el valor guardado
    }

    // Función para reemplazar {{BU}} en el HTML
    function updateBUValue(buValue) {
        buElements.forEach((element) => {
            const originalText = element.getAttribute("data-original"); // Obtener el valor original
            if (buValue) {
                // Reemplazar {{BU}} con el valor del input
                element.textContent = originalText.replace(/{{BU}}/g, buValue);
            } else {
                // Restaurar el valor original si el input está vacío
                element.textContent = originalText;
            }
        });
    }

    // Escuchar cambios en el input
    buInput.addEventListener("input", function () {
        const buValue = buInput.value.trim();
        localStorage.setItem("buValue", buValue); // Guardar el valor en localStorage
        updateBUValue(buValue); // Actualizar los elementos con el nuevo valor
    });

    // Resto del código existente...
    window.addEventListener("scroll", function () {
        const navHeight = nav.offsetHeight;

        if (window.scrollY > navHeight) {
            nav.classList.add("fixed-nav");
            hamburgerMenu.classList.add("hamburguer-menu-fadeIn");
            hamburgerMenu.classList.remove("hamburguer-menu-fadeOut");
        } else {
            nav.classList.remove("fixed-nav");
            hamburgerMenu.classList.add("hamburguer-menu-fadeOut");
            hamburgerMenu.classList.remove("hamburguer-menu-fadeIn");
        }

        if (window.scrollY > navHeight) {
            backToTopButton.classList.add("fadeIn");
            backToTopButton.classList.remove("fadeOut");
        } else {
            backToTopButton.classList.add("fadeOut");
            backToTopButton.classList.remove("fadeIn");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});