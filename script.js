function updateTimeAndDate() {
    const now = new Date();
    const date = now.toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = now.toLocaleTimeString('es-MX');

    document.getElementById('date').textContent = `Fecha: ${date}`;
    document.getElementById('time').textContent = `Hora: ${time}`;
}

// Actualiza la fecha y hora cada segundo
setInterval(updateTimeAndDate, 1000);

// Llama a la función inmediatamente para mostrar la fecha y hora al cargar la página
updateTimeAndDate();
