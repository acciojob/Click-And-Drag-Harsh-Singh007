const container = document.getElementById("container");
const items = document.querySelectorAll(".items");

let selected = null;
let offsetX = 0;
let offsetY = 0;

items.forEach((item, index) => {
  const cols = 2;
  const x = (index % cols) * 120;
  const y = Math.floor(index / cols) * 120;
  item.style.left = `${x}px`;
  item.style.top = `${y}px`;

  item.addEventListener("mousedown", (e) => {
    selected = item;
    const rect = item.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    offsetX = e.clientX - rect.left + container.scrollLeft;
    offsetY = e.clientY - rect.top + container.scrollTop;
  });
});

document.addEventListener("mousemove", (e) => {
  if (selected) {
    const containerRect = container.getBoundingClientRect();

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    x = Math.max(0, Math.min(x, container.clientWidth - selected.offsetWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - selected.offsetHeight));

    selected.style.left = `${x}px`;
    selected.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  selected = null;
});
