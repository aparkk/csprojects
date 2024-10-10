let angle = 12;
function setup() {
  createCanvas(windowHeight, windowHeight);
  background(0);
  colorMode(HSB, 360, 150, 100, 1);
}

function draw() {
  translate(width / 2, height / 2);

  for (let i = 0; i < angle; i++) {
    rotate(angle);
    strokeWeight(15);
    stroke(mouseX, 150, 100, 0.5);
    line(mouseX, mouseY, pmouseX, pmouseY);

    push();
    scale(1, -1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  }
}
