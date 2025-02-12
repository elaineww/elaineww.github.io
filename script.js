const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }
});

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
});
