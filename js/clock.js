function updateClock() {
    const clockElement = document.getElementById('clock'); // Elemento para el reloj
    const dateElement = document.getElementById('date'); // Elemento para la fecha
    const now = new Date(); // Obtener la fecha y hora actual

    // Obtener las horas, minutos y segundos en formato hh:mm:ss
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Obtener el día, mes y año en formato dd/mm/yyyy
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses son 0-indexados
    const year = now.getFullYear();

    // Mostrar la hora y la fecha en los elementos correspondientes
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${day}/${month}/${year}`; // Mostrar la fecha en formato dd/mm/yyyy

    document.title = `${hours}:${minutes} - Hora actual en Perú`; // Actualizar el título de la página
}

setInterval(updateClock, 1000);
updateClock(); // Llamar inmediatamente para que el reloj se muestre sin esperar el primer intervalo