const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxLength = 800;
const maxLevel = 4;
const branches = 2;
let lines = []
ctx.translate(canvas.width / 2, canvas.height / 2);

//const angle = Math.PI * 2 * 0.85;
const angle = Math.PI * 2 * 0.75;
function drawLine(x, y, length, angle, level) {
//function drawLine(level) {
  if (level > maxLevel) return;

  //ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  lines.push({
    x: x,
    length: length,
    angle: angle
  });

  //ctx.lineTo(800, 0);
  //ctx.stroke();

  for (let i = 1; i < branches + 1; i++) {
    //ctx.save();
    //ctx.translate(800 * i / (branches + 1), 0);
    let branchx = maxLength * i / (branches + 1);
    let branchlength = maxLength / i;
    let angle
    //ctx.scale(0.5, 0.5);
    //ctx.save();

    ctx.rotate(angle);
    ctx.strokeStyle = "red";
    drawLine(level + 1);
    ctx.restore();
    ctx.save();

    ctx.rotate(-angle);
    ctx.strokeStyle = "green";
    drawLine(level + 1);
    ctx.restore();

    ctx.restore();
  }
}

//for (let i = 0; i < 4; i++) {
  
  ctx.strokeStyle = "#fff";
  drawLine(0);
  //ctx.rotate(angle);
//}
