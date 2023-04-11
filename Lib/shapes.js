// Shape class
class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
      this.width = 300;
      this.height = 200;
    }
  
    render() {
      throw new Error("You have to implement the method render!");
    }
  }
  
  // Circle class that inherits from Shape
  class Circle extends Shape {
    constructor(shapeColor, radius) {
      super(shapeColor);
      this.radius = radius;
    }
  
    render(text, fontColor) {
      return `<svg width="300" height="200"><circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="50">${text}</text></svg>`;
    }
  }
  
  // Triangle class that inherits from Shape
  class Triangle extends Shape {
    constructor(shapeColor, width) {
      super(shapeColor);
      this.width = 300;
      this.height = 200;
    }
  
    render(text, fontColor) {
      return `<svg width="300" height="200"><polygon points="0,200 150,0 300,200" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="50">${text}</text></svg>`;
    }
  }
  
  // Square class that inherits from Shape
  class Square extends Shape {
    constructor(shapeColor, width) {
      super(shapeColor);
      this.width = 300;
      this.height = 200;
    }
  
    render(text, fontColor) {
      return `<svg width="300" height="200"><rect width="${this.width}" height="${this.height}" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="50">${text}</text></svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };