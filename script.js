// Detectar el cambio de modo oscuro en la configuración del sistema
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const currentMode = localStorage.getItem('dark-mode');

// Función para aplicar el modo oscuro
function applyDarkMode() {
    const isDarkMode = currentMode === 'dark' || (currentMode === null && prefersDarkMode.matches);
    document.body.classList.toggle('dark-mode', isDarkMode);
}

// Aplicar el modo oscuro al cargar la página
applyDarkMode();

// Cambiar el modo oscuro cuando se hace clic en el botón
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    const newMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('dark-mode', newMode);
    applyDarkMode();
});
