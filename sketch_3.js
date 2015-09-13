// Draw a grid of dots with random bright colors

int xpos = 50; // x and y position of the circle

void setup() {
  size(820, 820);
  background(255);
  colorMode(HSB,100);
  noStroke();
  smooth();
}

void draw() {

  while (xpos<width-43) { // Repeat drawing the lines of dots until it reaches the 50px margin
    int ypos = 50;

    while (ypos<height-43) { // Repeat drawing the ellipse until it reaches the 50px margin
      fill(random(100), 100, 100);
      ellipse(xpos, ypos, 40, 40); // Draw the ellipse
      ypos = ypos + 45; // Move the ellipse down and to the right 45 pixels each
    }
    xpos = xpos + 45;
  }
}
