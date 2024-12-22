document.querySelector("form").addEventListener("submit", function (event) {
    const lastSent = localStorage.getItem("lastSent");
    const currentDate = new Date().toISOString().split("T")[0]; // Fecha de hoy (AAAA-MM-DD)

    if (lastSent === currentDate) {
        event.preventDefault();
        alert("Ya has enviado un mensaje hoy. Inténtalo mañana.");
    } else {
        localStorage.setItem("lastSent", currentDate);
        alert("Mensaje enviado con éxito."); // Muestra un mensaje antes de enviar
    }
});
