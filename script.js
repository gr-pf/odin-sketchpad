const wrapper = document.querySelector(".wrapper");

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
}

function colorGrid(event) {
  event.target.classList.add("red");
}

buildGrid(16);

const squares = document.querySelectorAll(".square-grid");

squares.forEach((item) => {
  item.addEventListener("mouseenter", colorGrid);
});
