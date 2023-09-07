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
            customClass: {
                popup: 'mi-swal-popup',
                title: 'mi-swal-title',
                confirmButton: 'mi-swal-confirm-button',
                cancelButton: 'mi-swal-cancel-button'
            }
        });
    });
});
/*
####################################################################################################################
Configuración ocultar/mostrar login "Fin" ##########################################################################
####################################################################################################################
*/
/*
####################################################################################################################
Configuración del panle de administrador "Inicio" ##################################################################
####################################################################################################################
*/
document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('event-form');
    const addButton = document.getElementById('add-event-button'); // Asegúrate de asignar un ID al botón en tu HTML.

    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const eventTitle = document.getElementById('event-title').value;
        const eventDate = document.getElementById('event-date').value;

        // Aquí puedes agregar la lógica para guardar el evento en tu base de datos o calendario.
        // Por ejemplo, puedes usar FullCalendar para agregar eventos programáticamente.

        // Ejemplo de cómo agregar un evento a FullCalendar:
        const calendar = document.getElementById('calendar'); // Debes tener una referencia al calendario.
        const calendarApi = new FullCalendar.Calendar(calendar, {
            // Configuración de FullCalendar
        });

        calendarApi.addEvent({
            title: eventTitle,
            start: eventDate,
            allDay: true // Esto indica que es un evento de día completo.
        });

        // Refresca el calendario para mostrar el nuevo evento.
        calendarApi.render();

        // Limpiar el formulario
        document.getElementById('event-title').value = '';
        document.getElementById('event-date').value = '';
    });

    // Agrega un evento de clic al botón para redirigir al usuario a index.html
    addButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

/*
####################################################################################################################
Configuración del panle de administrador "Fin" #####################################################################
####################################################################################################################
*/

