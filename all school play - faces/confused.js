
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
  //arc(w/2 + 0, h/2 + 170, w/3, w/6, 9.7 * PI/8, 14.3 * PI/8);
  arc(w/2 + 0, h/2 + 200, w/3, w/4.5, 9.8 * PI/8, 14.2 * PI/8);

  arc(w/2 - 110, h/2 - 120, 190, 90, 1.67 * PI/8, 5.7 * PI/8);
  //arc(w/2 - 85, h/2 - 30, 170, 95, 9.1 * PI/8, 13.3 * PI/8);
  //arc(w/2 + 90, h/2 - 68, 130, 90, 9.6 * PI/8, 15.0 * PI/8);
  arc(w/2 + 95, h/2 - 40, 150, 150, 9.8 * PI/8, 13.7 * PI/8);

  fill(c);

  ellipse(w/2 - 90, h/2 - 30, 20, 35);
  ellipse(w/2 + 90, h/2 - 35, 20, 40);

}
