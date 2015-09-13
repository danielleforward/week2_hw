// Draw white dots diagonally across the canvas

int pos = 20; // x and y position of the circle

void setup() {
  size(820, 820);
  background(0);
  fill(255);
  noStroke();
  smooth();
  ellipseMode(CORNER);
}

void draw() {

    while (pos<width-40) { // Repeat drawing the ellipse until it reaches the 20px margin 
      ellipse(pos, pos, 40, 40); // Draw the ellipse
      pos = pos + 35; // Move the ellipse down and to the right 35 pixels both directions

  }
}
