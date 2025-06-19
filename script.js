// Your code here.
const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let selected = null;
let offsetX = 0;
let offsetY = 0;
let containerRect = container.getBoundingClientRect();

cubes.forEach((cube, index) => {
  // Arrange in grid
  const cols = 2;
  const x = (index % cols) * 120;
  const y = Math.floor(index / cols) * 120;
  cube.style.left = `${x}px`;
  cube.style.top = `${y}px`;

  // Mouse events
  cube.addEventListener("mousedown", (e) => {
    selected = cube;
    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    cube.style.cursor = "grabbing";
  });
});

document.addEventListener("mousemove", (e) => {
  if (selected) {
    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    // Constrain within container
    x = Math.max(0, Math.min(x, container.clientWidth - selected.offsetWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - selected.offsetHeight));

    selected.style.left = `${x}px`;
    selected.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  if (selected) {
    selected.style.cursor = "grab";
    selected = null;
  }
});
