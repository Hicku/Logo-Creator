

const { Circle, Triangle, Square } = require('./shapes');


describe("Circle", () => {
    test("should render a circle with the correct radius and color", () => {
      const circle = new Circle('#FF0000', 50);
      const renderedCircle = circle.render()
      expect(renderedCircle).toEqual('<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="#FF0000" /></svg>');
    });
  });
  
  describe('Triangle', () => {
    test('renders a triangle SVG with the correct dimensions and color', () => {
      const triangle = new Triangle('red', 100);
      const expectedSvg = '<svg width="100" height="86.60254037844386"><polygon points="0,86.60254037844386 50,0 100,86.60254037844386" fill="red" /></svg>';
      const renderedTriangle = triangle.render()
      expect(renderedTriangle).toEqual(expectedSvg);
    });
  });
  
  describe('Square', () => {
    test('renders a square SVG with the correct dimensions and color', () => {
      const square = new Square('blue', 50);
      const expectedSvg = '<svg width="50" height="50"><rect width="50" height="50" fill="blue" /></svg>';
      const renderedSquare = square.render()
      expect(renderedSquare).toEqual(expectedSvg);
    });
  });