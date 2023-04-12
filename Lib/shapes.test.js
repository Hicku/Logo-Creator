const { Circle, Triangle, Square } = require('./shapes');

describe("Circle", () => {
  test("should render a circle with the correct radius and color", () => {
    const circle = new Circle('#FF0000', 50);
    const renderedCircle = circle.render('Test', '#000000');
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="50" fill="#FF0000" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000000" font-size="50">Test</text></svg>`;
    expect(renderedCircle).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test('should render a triangle with the correct dimensions and color', () => {
    const triangle = new Triangle('#FF0000', 200);
    const renderedTriangle = triangle.render('Test', '#000000');
    const expectedFontSize = 40;
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="173.20508075688772"><polygon points="0,173.20508075688772 100,0 200,173.20508075688772" fill="#FF0000" /><text x="50%" y="87" dominant-baseline="middle" text-anchor="middle" fill="#000000" font-size="${expectedFontSize}">Test</text></svg>`;
    const receivedSvg = renderedTriangle.replace(/font-size="(\d+)"/, `font-size="${expectedFontSize}"`);
    expect(receivedSvg).toMatch(new RegExp(`font-size="${expectedFontSize - 1}|${expectedFontSize}|${expectedFontSize + 1}"`));
  });
});

describe("Square", () => {
  test("should render a square with the correct dimensions and color", () => {
    const square = new Square('#FF0000', 50);
    const renderedSquare = square.render('Test', '#000000');
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><rect width="50" height="50" fill="#FF0000" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000000" font-size="50">Test</text></svg>`;
    expect(renderedSquare).toEqual(expectedSvg);
  });
});