/* =========================================================
   theme.js — tema chiaro/scuro condiviso da tutte le pagine.
   Va incluso nell'<head>, prima del foglio di stile:
   <script src="theme.js"></script>
   ========================================================= */

// 1. Applica subito il tema salvato (o quello del sistema), prima che la pagina
//    venga disegnata, per evitare il lampeggio chiaro/scuro al caricamento.
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

// 2. Quando la pagina è pronta, collega il pulsante e ne aggiorna l'icona.
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;

    const updateIcon = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        toggleButton.textContent = isDark ? '☀️' : '🌙';
    };

    updateIcon();

    toggleButton.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateIcon();
    });
});
