const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

const containerRect = container.getBoundingClientRect();

// Initial grid position
cubes.forEach((cube, index) => {
  const cols = 2;
  const spacing = 120;
  const x = (index % cols) * spacing;
  const y = Math.floor(index / cols) * spacing;
  cube.style.left = `${x}px`;
  cube.style.top = `${y}px`;

  cube.addEventListener("mousedown", (e) => {
    selectedCube = cube;
    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    cube.style.zIndex = 1000;
  });
});

document.addEventListener("mousemove", (e) => {
  if (!selectedCube) return;

  const containerBounds = container.getBoundingClientRect();
  let x = e.clientX - containerBounds.left - offsetX;
  let y = e.clientY - containerBounds.top - offsetY;

  // Apply constraints
  x = Math.max(0, Math.min(x, container.clientWidth - selectedCube.offsetWidth));
  y = Math.max(0, Math.min(y, container.clientHeight - selectedCube.offsetHeight));

  selectedCube.style.left = `${x}px`;
  selectedCube.style.top = `${y}px`;
});

document.addEventListener("mouseup", () => {
  if (selectedCube) {
    selectedCube.style.zIndex = 0;
    selectedCube = null;
  }
});
