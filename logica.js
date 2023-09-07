/*
####################################################################################################################
Configuración del calendario "Inicio" ##############################################################################
####################################################################################################################
*/
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es', // Establece el idioma en español
        firstDay: 1, // Establece el lunes como primer día 
        aspectRatio: 1.8, // Establece el aspect ratio para adaptar el tamaño de las casillas

        headerToolbar: {
            start: 'prev,next today', // Botones "Anterior", "Siguiente" y "Hoy" a la izquierda
            center: 'title',         // Título del mes en el centro
            end: '',                 // Dejar el extremo derecho en blanco
        },
        buttonText: {
            today: 'Hoy',    // Texto del botón "Hoy"
            prev: 'Anterior', // Texto del botón "Anterior"
            next: 'Siguiente' // Texto del botón "Siguiente"
        },
        customButtons: {
            customPrev: {
                text: 'Personalizado', // Texto del botón personalizado
                click: function () {
                    // Función personalizada cuando se hace clic en el botón personalizado
                    // Puedes personalizar esto según tus necesidades
                }
            }
        },
        dayMaxEventRows: 3, // Número máximo de filas de eventos por día
    });
    calendar.render();
});
/*
####################################################################################################################
Configuración del calendario "Fin" #################################################################################
####################################################################################################################
*/
/*
####################################################################################################################
Configuración ocultar/mostrar login "Inicio" #######################################################################
####################################################################################################################
*/
document.addEventListener('DOMContentLoaded', function () {
    // Selector del enlace de acceso al administrador
    const adminAccessLink = document.getElementById('admin-access-link');

    // Agregar un evento clic al enlace
    adminAccessLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Mostrar SweetAlert2 con campos de acceso
        Swal.fire({
            title: 'Acceso Administrador',
            html:
                '<input id="admin-username" class="swal2-input" placeholder="Nombre de usuario" type="text">' +
                '<input id="admin-password" class="swal2-input" placeholder="Contraseña" type="password">',
            showCancelButton: true,
            confirmButtonText: 'Ingresar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                // Validar los campos aquí (por ejemplo, verificar nombre de usuario y contraseña)
                const username = document.getElementById('admin-username').value;
                const password = document.getElementById('admin-password').value;

                // Aquí puedes agregar la lógica de autenticación

                // Si la autenticación es exitosa, puedes redirigir al usuario administrador a la página correspondiente
                // Si la autenticación falla, puedes mostrar un mensaje de error
            },
        });
    });
});
/*
####################################################################################################################
Configuración ocultar/mostrar login "Fin" ##########################################################################
####################################################################################################################
*/
