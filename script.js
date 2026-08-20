// Update Time & Date
function updateClock() {
  const now = new Date();

  // Format Time (HH:MM:SS)
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("time").textContent =
    `${hours}:${minutes}:${seconds}`;

  // Format Day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").textContent = days[now.getDay()];

  // Format Date (DD MMM YYYY)
  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = now.toLocaleDateString(
    undefined,
    options,
  );
}

// Run clock immediately, then update every second
updateClock();
setInterval(updateClock, 1000);

// Theme Switcher
function changeTheme() {
  const theme = document.getElementById("theme-selector").value;
  document.body.className = `${theme} ${document.getElementById("font-selector").value}`;
}

// Font Switcher
function changeFont() {
  const font = document.getElementById("font-selector").value;
  document.body.className = `${document.getElementById("theme-selector").value} ${font}`;
}

// Fullscreen Toggle (Enter & Exit)
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Update button text when fullscreen changes via ESC key
document.addEventListener("fullscreenchange", () => {
  const btn = document.getElementById("fullscreen-btn");
  if (document.fullscreenElement) {
    btn.textContent = "✖ Exit Fullscreen";
  } else {
    btn.textContent = "⛶ Go Fullscreen";
  }
});
