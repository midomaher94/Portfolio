const darkModeToggle = document.createElement("button");
darkModeToggle.innerHTML = "🌙";
darkModeToggle.classList.add("dark-mode-toggle");
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

