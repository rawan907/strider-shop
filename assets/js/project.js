const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Get saved theme or use light mode
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme
document.documentElement.setAttribute("data-bs-theme", savedTheme);

// Set correct icon
if (savedTheme === "dark") {
  themeIcon.classList.remove("bi-moon");
  themeIcon.classList.add("bi-sun");
} else {
  themeIcon.classList.remove("bi-sun");
  themeIcon.classList.add("bi-moon");
}

// Toggle theme
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Change theme
  document.documentElement.setAttribute("data-bs-theme", newTheme);

  // Save theme
  localStorage.setItem("theme", newTheme);

  // Change Bootstrap icon
  if (newTheme === "dark") {
    themeIcon.classList.remove("bi-moon");
    themeIcon.classList.add("bi-sun");
  } else {
    themeIcon.classList.remove("bi-sun");
    themeIcon.classList.add("bi-moon");
  }
});
