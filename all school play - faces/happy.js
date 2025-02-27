
function setup() {
  createCanvas(1000, 700);
  background(0);

  c = color(109, 213, 237);

  w = 1000;
  h = 700;
}

let c, w, h;

function draw() {

  stroke(c);
  noFill();
  strokeWeight(17);

  circle(w/2, h/2, h/1.5);

  ellipseMode(CENTER);
  arc(w/2, h/2 + 10, w/3.7, w/4, PI/8, 7 * PI/8);

  fill(c);

  ellipse(w/2 - 90, h/2 - 50, 20, 40);
  ellipse(w/2 + 90, h/2 - 50, 20, 40);

}
