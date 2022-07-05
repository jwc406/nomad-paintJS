const canvas = document.getElementById("jsCanvas");

function onMouseMove(event) {
  console.log(event);
  const x = event.offsetX;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
}
