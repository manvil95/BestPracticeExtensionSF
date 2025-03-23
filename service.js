document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const nav = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const buInput = document.getElementById("bu-input");
    const buToggle = document.getElementById("buToggle");
    const buContainer = document.getElementById("buContainer");
        
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

    // Función para ajustar el ancho del input
    function adjustInputWidth() {
        const tempSpan = document.createElement("span");
        tempSpan.style.visibility = "hidden"; // Ocultar el span
        tempSpan.style.whiteSpace = "pre"; // Mantener el espaciado
        tempSpan.style.fontSize = window.getComputedStyle(buInput).fontSize; // Mismo tamaño de fuente
        tempSpan.style.fontFamily = window.getComputedStyle(buInput).fontFamily; // Misma fuente
        tempSpan.textContent = buInput.value || buInput.placeholder; // Usar el valor o el placeholder

        document.body.appendChild(tempSpan); // Añadir el span al DOM
        const textWidth = tempSpan.offsetWidth; // Calcular el ancho del texto
        document.body.removeChild(tempSpan); // Eliminar el span del DOM

        // Ajustar el ancho del input (solo el ancho del texto, sin padding)
        buInput.style.width = `${textWidth}px`;

        // Forzar el redibujado del input (para evitar problemas de renderizado)
        buInput.style.width = "auto"; // Resetear el ancho
        buInput.style.width = `${textWidth}px`; // Aplicar el nuevo ancho
    }

    // Ajustar el ancho inicial al tamaño del placeholder
    adjustInputWidth();

    // Escuchar cambios en el input
    buInput.addEventListener("input", adjustInputWidth);
    
    // Resto del código existente...
    window.addEventListener("scroll", function () {
        const navHeight = nav.offsetHeight;

        if (window.scrollY > navHeight) {
            nav.classList.add("fixed-nav");
            hamburgerMenu.classList.add("hamburguer-menu-fadeIn");
            hamburgerMenu.classList.remove("hamburguer-menu-fadeOut");
            buToggle.classList.remove("hidden");
        } else {
            nav.classList.remove("fixed-nav");
            hamburgerMenu.classList.add("hamburguer-menu-fadeOut");
            hamburgerMenu.classList.remove("hamburguer-menu-fadeIn");
            buToggle.classList.add("hidden"); // Ocultar el icono
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