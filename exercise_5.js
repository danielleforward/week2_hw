int xpos = 50; // x and y position of the circle

void setup() {
  size(820, 820); // Set the size of the canvas
  background(255); // Set background color to white
  colorMode(HSB,100); // Set colormode to HSB
  noStroke(); // No stroke on 
  smooth();
}

void draw() {

  // Repeat vertical lines of dots
  while (xpos<width-43) { // Repeat drawing the lines until they reach the 50px margin
    int ypos = 50;
    int hueShift = 0;

    //Repeat dots within one vertical line
    while (ypos<height-43) { // Repeat drawing the ellipse until it reaches the 50px margin
      fill(hueShift, 100, 100);
      ellipse(xpos, ypos, 40, 40); // Draw the ellipse
      ypos = ypos + 45; // Move the ellipse down and to the right 37 pixels each
      hueShift = hueShift + 5;
      
    }
    xpos = xpos + 45;
  }
}
