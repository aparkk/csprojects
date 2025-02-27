
let rate = 0.5;
let hueD = 1;
let fr = 20;
let chance = 0.1;
let array1 = [];
let newArray = [];
let paused = false;

let x1D, x2D, y2D, x3D, y3D, x4D;
let x1, x2, y2, x3, y3, x4,
  hue, saturation, brightness, alpha,
  angle, currR, maxY2, maxY3,
  petal, layer, type;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);

  frameRate(fr);

  let rMax = width / 2;

  brightness = 100;
  saturation = 100;

  if (type == 1) {
    alpha = 20;
    noStroke(0);
  } else {
    alpha = 100;
    stroke(0);
  }

  newArt();
}

function newArt() {
  array1 = [];
  petal = round(random(8, 25));
  layer = random(4, 30);
  angle = 360 / petal;

  for (let i = layer; i > 0; i--) {
    currR = (i / layer) * (width / 2);
    x1 = random(0.35 * currR, 0.45 * currR);
    x2 = random(0.5 * currR, 0.7 * currR);
    maxY2 = x2 * tan(angle) * 0.9;
    y2 = random(0.06 * currR, maxY2);
    x3 = random(x2 * 1.1, 0.85 * currR);
    maxY3 = x3 * tan(angle) * 0.9;
    y3 = random(0.06 * currR, maxY3);
    x4 = random(0.88 * currR, 0.99 * currR);
    x1D = x2D = y2D = x3D = y3D = x4D = (rate / layer) * i;
    hue = random(360);

    array1.push(x1, x2, y2, x3, y3, x4, x1D, x2D, y2D, x3D, y3D, x4D, hue, hueD);
  }
  if (paused) draw();
}


function draw() {
  newArray = [];
  push();
  translate(width / 2, height / 2);
  background(0);

  for (let i = layer; i > 0; i--) {
    let place = (layer - i) * 14;
    let x1N = array1[place + 0];
    let x2N = array1[place + 1];
    let y2N = array1[place + 2];
    let x3N = array1[place + 3];
    let y3N = array1[place + 4];
    let x4N = array1[place + 5];

    let x1Nd = array1[place + 6];
    let x2Nd = array1[place + 7];
    let y2Nd = array1[place + 8];
    let x3Nd = array1[place + 9];
    let y3Nd = array1[place + 10];
    let x4Nd = array1[place + 11];

    let hueN = array1[place + 12];
    let hueNd = array1[place + 13];

    currR = (i / layer) * (width / 2);

    x1N += x1Nd;
    if (x1N < 0.35 * currR || x1N > 0.45 * currR || random(10) < chance)
      x1Nd *= -1;

    x2N += x2Nd;
    if (x2N < 0.5 * currR || x2N > 0.7 * currR || random(10) < chance)
      x2Nd *= -1;
    maxY2 = x2N * tan(angle) * 0.9;

    y2N += y2Nd;
    if (y2N < 0.06 * currR || y2N > maxY2 || random(10) < chance)
      y2Nd *= -1;

    x3N += x3Nd;
    if (x3N < x2N * 1.1 || x3N > 0.85 * currR || random(10) < chance)
      x3Nd *= -1;
    maxY3 = x3N * tan(angle) * 0.9;

    y3N += y3Nd;
    if (y3N < 0.06 * currR || y3N > maxY3 || random(10) < chance)
      y3Nd *= -1;

    x4N += x4Nd;
    if (x4N < 0.88 * currR || x4N > 0.99 * currR || random(10) < chance)
      x4Nd *= -1;

    hueN += hueNd;
    if (hueN > 359) hueN = 0;
    if (hueN < 0) hueN = 359;

    if (random(10) < chance) hueNd *= -1;

    fill(hueN, saturation, brightness, alpha);
    newArray.push(x1N, x2N, y2N, x3N, y3N, x4N, x1Nd, x2Nd, y2Nd, x3Nd, y3Nd, x4Nd, hueN, hueNd);

    for (let i = 0; i < petal; i++) {
      beginShape();
      curveVertex(x4N, 0);
      curveVertex(x4N, 0);
      curveVertex(x3N, y3N);
      curveVertex(x2N, y2N);
      curveVertex(x1N, 0);
      curveVertex(x2N, -y2N);
      curveVertex(x3N, -y3N);
      curveVertex(x4N, 0);
      curveVertex(x4N, 0);
      endShape();

      rotate(angle);
    }
  }
  pop();
  array1 = newArray;
}

function keyTyped() {
  if (key === "p") {
    if (paused) {
      loop();
      paused = false;
    }
    else {
      noLoop();
      paused = true;
    }
  }

  if (key === "1") {
    type = 1;
    setup();
  }
  else if (key === "2") {
    type = 2
    setup();
  };
}
