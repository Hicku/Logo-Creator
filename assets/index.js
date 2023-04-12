// Importing required modules
const path = require("path");
const fs = require("fs");
const { Circle, Triangle, Square } = require("../Lib/shapes");

// Declare inquirer variable
let inquirer;

// Dynamically import inquirer module using ES6 import syntax
import('inquirer').then((inquirerModule) => {
  // Assigning the default export of inquirer module to inquirer variable
  inquirer = inquirerModule.default;

  // Prompt questions to the user
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
        // Validate user input to match hexadecimal color format
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
        return hexRegex.test(value) || "Please enter a valid hexadecimal colour value";
      }
    },
    {
      type: "input",
      name: "text",
      message: "What text do you want in the logo?",
      validate: function (value) {
        // Validate user input to check if it is three characters or less
        return value.length <= 3 || "Text must be 3 characters or less";
      }
    },
    {
      type: "input",
      name: "fontColour",
      message: "What colour do you want the text to be (in hexadecimal format)?",
      validate: function (value) {
        // Validate user input to match hexadecimal color format
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
        return hexRegex.test(value) || "Please enter a valid hexadecimal colour value";
      }
    }
  ];

  // Function to write generated SVG code to a file
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

  // Prompt user with questions and generate SVG code based on user input
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

    // Write generated SVG code to a file
    writeToFile('Logo.svg', svg);
  }).catch((error) => {
    console.error(error);
  });
}).catch((error) => {
  console.error(error);
});