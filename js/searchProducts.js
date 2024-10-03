document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const contenido = document.getElementById('productList'); // Asegúrate de que este ID exista

    // Escuchar el evento de entrada en el campo de búsqueda
    searchInput.addEventListener('input', function() {
        let producto = searchInput.value;
        
        // Limpiar el contenido si el campo de búsqueda está vacío
        if (producto.trim() === '') {
            contenido.innerHTML = ''; // Limpiar el contenido del div
            return; // No continuar con el resto del código
        }

        fetch('./php/getProducts.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre: producto })
        })
        .then(response => response.json())
        .then(data => {
            // Limpiar el contenido anterior
            contenido.innerHTML = ''; // Limpia el contenido anterior

            // Verificar si hay productos en los resultados
            if (data.length > 0) {
                contenido.innerHTML = ` 
                <div class="text-center mb-4 w-100"> <!-- Div que ocupa el total del ancho -->
                    <h2>Resultados de la búsqueda:</h2> <!-- Título centrado -->
                </div>`;

                data.forEach(element => {
                    contenido.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${element.Imagen}" class="card-img-top" alt="${element.Nombre}" />
                            <div class="card-body">
                                <p class="text-success">Precio: $U${element.Precio}</p>
                                <h5 class="card-title">${element.Nombre}</h5>
                                <p class="card-text">${element.Contenido}</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary w-100 mb-1">
                                    Agregar al carrito
                                </button>
                                <button type="button" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#modalProduct">
                                    Más información
                                </button>
                            </div>
                        </div>
                    </div>
                    `;
                });

                contenido.innerHTML += `
                    </div> <!-- row -->
                    </div> <!-- container -->
                    <br><br>
                `;
            } else {
                contenido.innerHTML = ` 
                <div class="text-center mb-4 w-100"> <!-- Div que ocupa el total del ancho -->
                    <h2>No se encontraron productos.</h2> <!-- Título centrado -->
                </div>`;
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
