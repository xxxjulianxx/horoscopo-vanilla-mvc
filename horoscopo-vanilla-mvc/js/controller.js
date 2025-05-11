document.getElementById("consultar").addEventListener("click", function() {
    const fecha = document.getElementById("fecha-nacimiento").value;

    if (!fecha) {
        mostrarResultado("Por favor, ingresa tu fecha de nacimiento.");
        return;
    }

    const signo = obtenerSigno(fecha);
    const mensaje = obtenerHoroscopo(signo);
    mostrarResultado(`Tu signo es ${signo.toUpperCase()}: ${mensaje}`);
});
