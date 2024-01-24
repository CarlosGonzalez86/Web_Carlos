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
