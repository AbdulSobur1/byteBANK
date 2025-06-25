<script>
  // Apply saved theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const root = document.documentElement;
    const toggleBtn = document.querySelector(".theme-toggle");

    if (savedTheme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (toggleBtn) toggleBtn.textContent = "☀️"; // light mode icon
    } else {
      root.setAttribute("data-theme", "light");
      if (toggleBtn) toggleBtn.textContent = "🌙"; // dark mode icon
    }

    // Add event listener to toggle theme
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        root.setAttribute("data-theme", isDark ? "light" : "dark");
        toggleBtn.textContent = isDark ? "🌙" : "☀️";
        localStorage.setItem("theme", isDark ? "light" : "dark");
      });
    }
  });
</script>
