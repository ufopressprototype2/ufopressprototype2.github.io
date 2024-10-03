document.addEventListener('DOMContentLoaded', function () {
    verificarAdminMenu(); // Verifica si debe mostrar el menú de administración

    // Escuchar el evento de cierre de sesión (modifica esto según tu lógica de cierre de sesión)
    document.getElementById('liLogout').addEventListener('click', function () {
        localStorage.removeItem('tipoUsuario'); // Limpiar tipoUsuario del localStorage
        eliminarAdminMenu(); // Eliminar el menú de administración si existe
    });
});
