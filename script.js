const darkMode = document.querySelector("#dark-mode-toggler");

darkMode.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
});