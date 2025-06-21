document.addEventListener("DOMContentLoaded", function () {
    const root = document.documentElement;
    const toggleBtn = document.querySelector(".theme-toggle");

    //Load stored theme on page load
    if (localStorage.getItem("theme") === "dark") {
        root.setAttribute("data-theme", "dark");
        toggleBtn.textContent = "🌞";
    }

    toggleBtn.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        if (isDark) {
            root.removeAttribute("data-theme");
            toggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
            toggleBtn.textContent = "🌞";
            localStorage.setItem("theme", "dark");
        }
    });
});