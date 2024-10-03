document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('liLogout');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            const confirmation = confirm('¿Estás seguro de que deseas cerrar sesión?');

            if (confirmation) {
                // Eliminar el nombre y tipo de usuario del localStorage
                localStorage.removeItem('nombreUsuario');
                localStorage.removeItem('tipoUsuario');
                
                // Verificar nuevamente el estado del usuario para actualizar la interfaz
                verificarUsuario(); // Llamada a la función global
            }
        });
    }
});
