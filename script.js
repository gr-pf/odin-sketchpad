const button = document.querySelector("button");
button.addEventListener("click", askGridSize);

const wrapper = document.querySelector(".wrapper");

let opacity = 0;

function buildGrid(number) {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.lastChild);
  }
  for (let i = 0; i < number * number; i++) {
    const squareGrid = document.createElement("div");
    const widthSquare = 960 / number;
    squareGrid.className = "square-grid";
    squareGrid.style.width = `${widthSquare}px`;
    wrapper.appendChild(squareGrid);
  }
  opacity = 0;
}

function colorSquare(event) {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
  const randomColor = colors[Math.floor(Math.random() * 7)];
  event.target.classList.remove(
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
  );
  event.target.classList.add(randomColor);
  if (opacity < 1) {
    opacity += 0.01;
  }
  event.target.style.opacity = opacity;
}

function askGridSize() {
  let loop = true;
  let userNumber;
  while (loop) {
    userNumber = +prompt("How many square per side?");
    console.log(userNumber);
    if (Number.isInteger(userNumber) && userNumber > 0 && userNumber < 100) {
      loop = false;
    }
  }
  console.log(userNumber);
  buildGrid(userNumber);
  modifySquare();
}

function modifySquare() {
  const squares = document.querySelectorAll(".square-grid");
  squares.forEach((item) => {
    item.addEventListener("mouseenter", colorSquare);
  });
}

buildGrid(16);
modifySquare();
