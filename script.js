const scrollContainer = document.getElementById('scrollContainer');

let isDragging = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  scrollContainer.classList.add('dragging');
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  scrollContainer.classList.remove('dragging');
});

scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
  scrollContainer.classList.remove('dragging');
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // scroll-fast
  scrollContainer.scrollLeft = scrollLeft - walk;
});
