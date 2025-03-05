// Evita redeclarar variables si el script ya está inyectado
if (typeof modalOverlay === 'undefined') {
    let modalOverlay = null; // Referencia al modal
    let isModalOpen = false; // Estado del modal

    // Función para crear el modal
    function createModal() {
        modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        function closeModal() {
            if (document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
                isModalOpen = false; // Actualiza el estado
            }
        }

        // Función para cargar contenido en el modal
        function loadContent(url) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    modalContent.innerHTML = data; // Reemplaza el contenido del modal
                    injectStyles(); // Inyecta estilos
                    updateLinks(modalContent); // Actualiza los enlaces
                    attachLinkHandlers(modalContent); // Adjunta manejadores de clic a los enlaces
                })
                .catch(error => {
                    console.error('Error cargando el archivo:', error);
                });
        }

        // Cargar index.html la primera vez
        const initialUrl = chrome.runtime.getURL('html/index.html');
        loadContent(initialUrl);

        // Adjuntar manejadores de clic a los enlaces
        function attachLinkHandlers(container) {
            container.addEventListener('click', (event) => {
                const link = event.target.closest('a');
                if (link && link.href) {
                    event.preventDefault(); // Evita la navegación predeterminada
                    const href = link.href;
                    loadContent(href); // Carga el contenido del enlace en el modal
                }
            });
        }

        // Cerrar el modal al hacer clic fuera del contenido
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
        isModalOpen = true; // Actualiza el estado
    }

    function injectStyles() {
        const styleUrl = chrome.runtime.getURL('styles.css');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = styleUrl;
        document.head.appendChild(link);
    }

    function updateLinks(container) {
        // Genera las rutas absolutas para los archivos HTML
        const fieldsUrl = chrome.runtime.getURL('html/fields.html');
        const metadataUrl = chrome.runtime.getURL('html/metadata.html');
        const apexUrl = chrome.runtime.getURL('html/apex.html');
        const branchingUrl = chrome.runtime.getURL('html/branching.html');

        // Actualiza los enlaces
        const fieldsLink = container.querySelector('#fields-link');
        const metadataLink = container.querySelector('#metadata-link');
        const apexLink = container.querySelector('#apex-link');
        const branchingLink = container.querySelector('#branching-link');

        if (fieldsLink) fieldsLink.href = fieldsUrl;
        if (metadataLink) metadataLink.href = metadataUrl;
        if (apexLink) apexLink.href = apexUrl;
        if (branchingLink) branchingLink.href = branchingUrl;
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
}