const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function newTime() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hoursElement.textContent = fixTime(hours);
  minutesElement.textContent = fixTime(minutes);
  secondsElement.textContent = fixTime(seconds);
}

function fixTime(time) {
  return time < 10 ? "0" + time : time;
}

const themeButton = document.getElementById("theme");
const themeIcon = themeButton.querySelector("img");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeIcon.src = "./assets/imgs/sol-light.png";
    themeIcon.alt = "Modo Claro";
  } else {
    themeIcon.src = "./assets/imgs/sol-dark.png";
    themeIcon.alt = "Modo Noturno";
  }
});

newTime();
setInterval(newTime, 1000);
