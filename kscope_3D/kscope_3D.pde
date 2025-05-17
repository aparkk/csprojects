import peasy.*;

int size = 200;
int angle = 12;

PeasyCam cam;

void setup() {
  size(1000, 700, P3D);
  background(0);
  colorMode(HSB, 360, 150, 100, 1);
  
   cam = new PeasyCam(this, 0, 0, 0, 500);
}

void drawAxes() {
    strokeWeight(5);
    
    stroke(255, 0, 0);
    line(0, 0, 0, size, 0, 0);
    
    stroke(255, 220, 220);
    line(-size, 0, 0, 0, 0, 0);
    
    stroke(0, 255, 0);
    line(0, 0, 0, 0, size, 0);
    
    stroke(220, 255, 220);
    line(0, -size, 0, 0, 0, 0);
    
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, size);
    
    stroke(220, 220, 255);
    line(0, 0,-size, 0, 0, 0);
}

void draw() {
  
  drawAxes();
  translate(width / 2, height / 2);

  for (int i = 0; i < angle; i++) {
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
