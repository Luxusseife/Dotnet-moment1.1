// Funktionalitet för att växla mellan ljust (default) och mörkt tema.

// Hämtar in element.
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Kontrollerar om temat finns i localStorage och använder i så fall det.
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

// Lyssnar efter klick för att växla tema.
themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Lagrar temat i localStorage.
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});