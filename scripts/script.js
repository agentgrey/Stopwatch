console.log("hi");

// variables

// on which the time is displayed
var timer = document.getElementById('timer');
// buttons
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
// global variables





// when start button is clicked
function startTimer() {
}

// when stop button is clicked
function stopTimer() {
} 

// when reset button is clicked
function resetTimer() {
    timer.innerHTML = "00:00:00:00"; // reset timer to all zeros
}








// for the light and dark toggle button
const toggle = document.getElementById("switch");
const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";

// swap the stylesheets to change theme
toggle.addEventListener("change", () => {
    const theme = document.getElementById("theme");
  if (theme.getAttribute("href") === darkTheme) {
    theme.setAttribute("href", lightTheme);
  } else {
    theme.setAttribute("href", darkTheme);
  }
});