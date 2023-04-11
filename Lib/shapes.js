// Shape class
class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
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
      return `<svg width="${this.radius * 2}" height="${this.radius * 2}">
        <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.shapeColor}" />
      </svg>`;
    }
  }
  
  // Triangle class that inherits from Shape
  class Triangle extends Shape {
    constructor(shapeColor, width) {
      super(shapeColor);
      this.width = width;
    }
  
    render() {
      const height = (this.width * Math.sqrt(3)) / 2;
      return `<svg width="${this.width}" height="${height}">
        <polygon points="0,${height} ${this.width / 2},0 ${this.width},${height}" fill="${this.shapeColor}" />
      </svg>`;
    }
  }
  
  // Square class that inherits from Shape
  class Square extends Shape {
    constructor(shapeColor, width) {
      super(shapeColor);
      this.width = width;
    }
  
    render() {
      return `<svg width="${this.width}" height="${this.width}">
        <rect width="${this.width}" height="${this.width}" fill="${this.shapeColor}" />
      </svg>`;
    }
  }

  module.export = Circle