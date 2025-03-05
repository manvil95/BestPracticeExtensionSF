chrome.action.onClicked.addListener((tab) => {
    // Envía un mensaje a content.js para alternar el modal
    chrome.tabs.sendMessage(tab.id, { action: "toggleModal" })
        .catch((error) => {
            // Si content.js no está inyectado, inyéctalo
            if (error.message.includes("Receiving end does not exist")) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['content.js']
                }).then(() => {
                    console.log("Script inyectado correctamente.");
                }).catch((error) => {
                    console.error("Error ejecutando el script: ", error);
                });
            } else {
                console.error("Error enviando mensaje: ", error);
            }
        });
});