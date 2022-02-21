const $darkModeBtn = document.querySelector(".DarkModeBtn");

const isUserColorTheme = localStorage.getItem("color-theme");
const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const getUserTheme = () =>
  isUserColorTheme ? isUserColorTheme : isOsColorTheme;

window.onload = function () {
  if (getUserTheme() === "dark") {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    $darkModeBtn.innerText = "🌕";
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    $darkModeBtn.innerText = "🌑";
  }
};

$darkModeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if ($darkModeBtn.innerText === "🌕") {
    $darkModeBtn.innerText = "🌑";
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "ligth");
  } else {
    $darkModeBtn.innerText = "🌕";
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
  }
});
