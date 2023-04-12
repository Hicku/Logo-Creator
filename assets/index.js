const path = require("path");
const fs = require("fs");
const { Circle, Triangle, Square } = require("../Lib/shapes");

let inquirer;
import('inquirer').then((inquirerModule) => {
  inquirer = inquirerModule.default;
  const questions = [
    {
      type: "list",
      name: "shape",
      message: "What shape do you want your logo to be?",
      choices: ["square", "circle", "triangle"]
    },
    {
      type: "input",
      name: "colour",
      message: "What colour do you want for your shape (in hexadecimal format)?",
      validate: function (value) {
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
        return hexRegex.test(value) || "Please enter a valid hexadecimal colour value";
      }
    },
    {
      type: "input",
      name: "text",
      message: "What text do you want in the logo?",
      validate: function (value) {
        return value.length <= 3 || "Text must be 3 characters or less";
      }
    },
    {
      type: "input",
      name: "fontColour",
      message: "What colour do you want the text to be (in hexadecimal format)?",
      validate: function (value) {
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
        return hexRegex.test(value) || "Please enter a valid hexadecimal colour value";
      }
    }
  ];

  function writeToFile(fileName, data) {
    let filePath = path.join(__dirname, "../examples", fileName);
    let count = 1;
    while (fs.existsSync(filePath)) {
      count++;
      filePath = path.join(__dirname, "../examples", `${fileName.replace(".svg", "")}${count}.svg`);
    }
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${path.basename(filePath)} file generated successfully!`);
      }
    });
  }

  inquirer.prompt(questions).then((answers) => {
    let shape;
    if (answers.shape === "circle") {
      shape = new Circle(answers.colour, 50);
    } else if (answers.shape === "square") {
      shape = new Square(answers.colour, 100);
    } else if (answers.shape === "triangle") {
      shape = new Triangle(answers.colour, 100);
    }
    const svg = shape.render(answers.text, answers.fontColour);
    writeToFile('Logo.svg', svg);
  }).catch((error) => {
    console.error(error);
  });
}).catch((error) => {
  console.error(error);
});



