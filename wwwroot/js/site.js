// Funktionalitet för att växla mellan ljust (default) och mörkt tema.
const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});