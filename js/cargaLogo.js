document.addEventListener("DOMContentLoaded", function() {
    // Fetch para obtener la imagen desde PHP
    const DATA_URL = "./php/getEmpresa.php";

    fetch(DATA_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        if (data[0].Logo) {
            const logoContainer = document.getElementById('logoHeader');
            const imgElement = document.createElement('img');
            imgElement.src = data[0].Logo; // Asignar la URL de la imagen
            imgElement.alt = "Logo de ComicVerse";
            imgElement.style.maxWidth = '75px';
            
            logoContainer.appendChild(imgElement);

            const logoModal = document.getElementById('logoModal');
            logoModal.src = data[0].Logo; // Asignar la URL de la imagen
            logoModal.alt = "Logo de ComicVerse";
            logoModal.style.maxWidth = '55px'; 
            logoModal.style.height = '55px';
        } else {
            console.error("No se encontró el atributo 'Logo' en la respuesta.");
        }
    })
    .catch(error => {
        console.error('Hubo un problema con la petición fetch:', error);
    });
});