// Drawing white lines changing height from mouse placement

int numberOfBars = 20;

void setup() {
  size(800, 800);
  noStroke();
  background(0);
  frameRate(10);
}

void draw() {

  if (numberOfBars < width) {
    fill(0); // Black lines to cover up previous white lines
    rect(numberOfBars, 0, 5, height); // Erase the previous white lines
    fill(255); 
    rect(numberOfBars, mouseY, 5, height); // Draw white lines
    numberOfBars += 20; // Move the next line drawing over 20 pixels to the right
  } else {

    numberOfBars = 20; // Reset x to start conditional again
  }
}
