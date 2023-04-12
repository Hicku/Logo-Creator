// Define the base Shape class
class Shape {
  constructor(shapeColor) { // Constructor function that takes in a shapeColor parameter
    this.shapeColor = shapeColor; // Set the shapeColor property on the instance
    this.width = 300; // Set the default width property on the instance
    this.height = 200;   // Set the default height property on the instance
  }

  render() {  // Define a render method on the class that throws an error
    throw new Error("You have to implement the method render!");
  }
}

// Define the Circle class, which extends the Shape class
class Circle extends Shape {
  constructor(shapeColor, radius) {  // Set the radius property
    super(shapeColor); // Call the super constructor with the shapeColor parameter
    this.radius = radius;
  }

  render(text, fontColor) {  // Define a render method on the class that takes in text and fontColor parameters
     // Return an SVG string with the circle and text elements, using the shapeColor, width, height, radius, text, and fontColor properties
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"><circle cx="${this.width / 2}" cy="${this.height / 2}" r="${this.radius}" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="50">${text}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, width) {
    super(shapeColor);
    this.width = width;
    this.height = (width * Math.sqrt(3)) / 2;
  }

  render(text, fontColor) {
    const textLength = text.length;
    const textWidth = textLength * 28;
    let fontSize = 50;
    if (textWidth > this.width - 50) {
      fontSize = Math.floor(((this.width - 50) / textWidth) * 50);
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"><polygon points="0,${this.height} ${this.width / 2},0 ${this.width},${this.height}" fill="${this.shapeColor}" /><text x="50%" y="${this.height / 2 + 10}" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="${fontSize}">${text}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, width) {
    super(shapeColor);
    this.width = width;
    this.height = width;
  }

  render(text, fontColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"><rect width="${this.width}" height="${this.height}" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="50">${text}</text></svg>`;
  }
}

// Export shapes to be for tests
module.exports = { Circle, Triangle, Square };