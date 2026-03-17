document.getElementById("year").textContent = new Date().getFullYear();

const sonar = document.querySelector(".sonar");

if (sonar) {
  sonar.addEventListener("mousemove", (e) => {
    const rect = sonar.getBoundingClientRect();
    const ping = document.createElement("div");
    ping.className = "ping active";

    ping.style.left = (e.clientX - rect.left) + "px";
    ping.style.top = (e.clientY - rect.top) + "px";

    sonar.appendChild(ping);

    setTimeout(() => {
      ping.remove();
    }, 1200);
  });
}

const toggleButton = document.getElementById("theme-toggle");
const toggleText = toggleButton ? toggleButton.querySelector(".theme-toggle-text") : null;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

function updateThemeLabel() {
  if (!toggleText) return;
  toggleText.textContent = document.body.classList.contains("dark-theme")
    ? "Light mode"
    : "Dark mode";
}

updateThemeLabel();

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeLabel();
  });
}
