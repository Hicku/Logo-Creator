// Shape class
class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
      this.width = 300;
      this.height = 200;
    }
  
    render() {
      throw new Error('You have to implement the method render!');
    }
  }
  
  // Circle class that inherits from Shape
  class Circle extends Shape {
    constructor(shapeColor, radius) {
      super(shapeColor);
      this.radius = radius;
    }
  
    render() {
      return `<svg width="${this.width}" height="${this.height}"><circle cx="${this.width / 2}" cy="${this.height / 2}" r="${this.radius}" fill="${this.shapeColor}" /></svg>`; 
    }
  }
  
  // Triangle class that inherits from Shape
  class Triangle extends Shape {
    constructor(shapeColor, width) {
      super(shapeColor);
      this.width = width;
      this.height = (this.width * Math.sqrt(3)) / 2;
    }
  
    render() {
      return `<svg width="${this.width}" height="${this.height}"><polygon points="0,${this.height} ${this.width / 2},0 ${this.width},${this.height}" fill="${this.shapeColor}" /></svg>`;
    }
  }
  
  // Square class that inherits from Shape
  class Square extends Shape {
    constructor(shapeColor, width) {
      super(shapeColor);
      this.width = width;
      this.height = width;
    }
  
    render() {
      return `<svg width="${this.width}" height="${this.height}"><rect width="${this.width}" height="${this.height}" fill="${this.shapeColor}" /></svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  
  
  
  
  