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

class Circle extends Shape {
  constructor(shapeColor, radius) {
    super(shapeColor);
    this.radius = radius;
  }

  render(text, fontColor) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"><circle cx="${this.width/2}" cy="${this.height/2}" r="${this.radius}" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="50">${text}</text></svg>`;
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
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"><polygon points="0,${this.height} ${this.width/2},0 ${this.width},${this.height}" fill="${this.shapeColor}" /><text x="50%" y="${this.height/2 + 10}" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}" font-size="${fontSize}">${text}</text></svg>`;
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

module.exports = { Circle, Triangle, Square };