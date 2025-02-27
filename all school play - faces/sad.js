
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
  arc(w/2, h/2 + 190, w/4, w/4, 9.4 * PI/8, 14.6 * PI/8);

  fill(c);

  ellipse(w/2 - 90, h/2 - 50, 20, 40);
  ellipse(w/2 + 90, h/2 - 50, 20, 40);

}
