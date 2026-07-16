const hamburger = document.getElementById("hamburger");
const nava = document.getElementById("nava");

hamburger.addEventListener("click", function () {
  nava.classList.toggle("active");
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.innerHTML = "☀️";
  } else {
    themeToggle.innerHTML = "🌙";
  }
});
