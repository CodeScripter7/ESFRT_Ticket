document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return; // Evita errores si el botón no existe

  const body = document.body;
  const currentTheme = localStorage.getItem("theme") || "dark";
  body.classList.toggle("light-mode", currentTheme === "light");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const theme = body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", theme);
    updateThemeIcon();
  });

  updateThemeIcon();
});

function updateThemeIcon() {
  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = themeToggle.querySelector(".fa-sun");
  const moonIcon = themeToggle.querySelector(".fa-moon");

  if (document.body.classList.contains("light-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  } else {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }
}
