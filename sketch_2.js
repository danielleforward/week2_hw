// Fill a grid with white dots

int xpos = 50; // x and y position of the circle

void setup() {
  size(820, 820);
  background(0);
  fill(255);
  noStroke();
  smooth();
}

void draw() {

  while (xpos<width-43) { // Repeat drawing the line until it reaches the 50px margin
    int ypos = 50;

    while (ypos<height-43) { // Repeat drawing the ellipse until it reaches the 50px margin 
      ellipse(xpos, ypos, 40, 40); // Draw the ellipse
      ypos = ypos + 45; // Move the ellipse down and to the right 37 pixels each
    }
    xpos = xpos + 45;
  }
}
