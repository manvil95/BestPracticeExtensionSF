let modalOverlay = null; // Referencia al modal
let isModalOpen = false; // Estado del modal
let isMouseOverIframe = false; // Estado del ratón sobre el iframe

// Función para crear el modal
function createModal() {
    if (isModalOpen) return; // Si el modal ya está abierto, no hacer nada

    // Crear el contenedor del modal
    modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '10px';
    modalOverlay.style.right = '10px';
    modalOverlay.style.width = '500px';
    modalOverlay.style.height = '500px';
    modalOverlay.style.zIndex = '2147483647';
    modalOverlay.style.borderRadius = '8px';
    modalOverlay.style.display = 'fixed';
    modalOverlay.classList.add('modal-overlay');

    // Crear el iframe para el contenido del modal
    const iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('html/index.html');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.borderRadius = '8px';

    // Event listeners para detectar cuándo el ratón entra y sale del iframe
    iframe.addEventListener('mouseenter', () => {
        isMouseOverIframe = true;
        document.body.style.overflow = 'hidden'; // Deshabilitar scroll en la página principal
    });

    iframe.addEventListener('mouseleave', () => {
        isMouseOverIframe = false;
        document.body.style.overflow = ''; // Restablecer scroll en la página principal
    });

    // Añadir el iframe al modal
    modalOverlay.appendChild(iframe);

    // Función para cerrar el modal
    function closeModal() {
        if (modalOverlay && document.body.contains(modalOverlay)) {
            document.body.removeChild(modalOverlay);
            modalOverlay = null;
            isModalOpen = false;
            // Eliminar el event listener del documento
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = ''; // Restablecer scroll en la página principal
        }
    }

    // Función para manejar clics fuera del iframe
    function handleClickOutside(event) {
        // Verifica si el clic ocurrió fuera del iframe
        if (modalOverlay && !modalOverlay.contains(event.target)) {
            closeModal();
        }
    }

    // Añadir el modal al body
    document.body.appendChild(modalOverlay);
    isModalOpen = true; // Actualiza el estado

    // Escuchar clics en el documento para cerrar el modal
    document.addEventListener('click', handleClickOutside);
}

// Escucha mensajes desde background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleModal") {
        if (isModalOpen) {
            // Cierra el modal si ya está abierto
            if (modalOverlay && document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
                modalOverlay = null;
            }
            isModalOpen = false;
        } else {
            // Abre el modal si está cerrado
            createModal();
        }
    }
});