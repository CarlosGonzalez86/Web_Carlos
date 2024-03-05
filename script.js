// Función para detectar el cambio de modo oscuro en la configuración del sistema
function prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Función para aplicar el modo oscuro
function applyDarkMode(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
}

// Función para obtener el modo actual almacenado en localStorage
function getCurrentMode() {
    return localStorage.getItem('dark-mode');
}

// Función para cambiar el modo oscuro
function toggleDarkMode() {
    const currentMode = getCurrentMode();
    const isDarkMode = currentMode === 'dark' || (currentMode === null && prefersDarkMode());
    const newMode = isDarkMode ? 'light' : 'dark';

    localStorage.setItem('dark-mode', newMode);
    applyDarkMode(!isDarkMode); // Invertir el modo actual
}

// Función para cargar el modo oscuro al inicio
function loadDarkMode() {
    const currentMode = getCurrentMode();
    applyDarkMode(currentMode === 'dark' || (currentMode === null && prefersDarkMode()));
}

// Aplicar el modo oscuro al cargar la página
loadDarkMode();

// Cambiar el modo oscuro cuando se hace clic en el botón
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

    function calcular() {
        var horas = parseFloat(document.getElementById('horas').value);
        var tarifa = parseFloat(document.getElementById('tarifa').value);
        var total = horas * tarifa;
        var deduccion = total * 0.1385; // Cambiado a 13.85%
        var totalConDeduccion = total - deduccion;

        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '<h3>Resultado</h3><p>Total a pagar: $' + total.toFixed(2) + '</p>' + '<p>Descuento del 13.85%: $' + deduccion.toFixed(2) + '</p>' + '<p>Total a pagar con descuento: $' + totalConDeduccion.toFixed(2) + '</p>';
    }
