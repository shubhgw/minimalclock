
function updateClock() {
  const now = new Date();

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("time").textContent =
    `${hours}:${minutes}:${seconds}`;

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

  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = now.toLocaleDateString(
    undefined,
    options,
  );
}

updateClock();
setInterval(updateClock, 1000);

function changeTheme() {
  const theme = document.getElementById("theme-selector").value;
  document.body.className = `${theme} ${document.getElementById("font-selector").value}`;
}

function changeFont() {
  const font = document.getElementById("font-selector").value;
  document.body.className = `${document.getElementById("theme-selector").value} ${font}`;
}

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

document.addEventListener("fullscreenchange", () => {
  const btn = document.getElementById("fullscreen-btn");
  if (document.fullscreenElement) {
    btn.textContent = "✖ Exit Fullscreen";
  } else {
    btn.textContent = "⛶ Go Fullscreen";
  }
});
