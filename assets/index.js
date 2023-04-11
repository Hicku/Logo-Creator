const fs = require("fs");
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
            validate: function(value) {
                const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
                return hexRegex.test(value) || "Please enter a valid hexadecimal colour value";
            }
        },
        {
            type: "input",
            name: "text",
            message: "What text do you want in the logo?"           
        },
        {
            type: "input",
            name: "fontColour",
            messgae: "What colour do you want the text to be (in hexadecimal format)?",
            validate: function (value) {    
                const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
                return hexRegex.test(value) || "Please enter a valid hexadecimal colour value";
            }
        },  
  ]


  inquirer.prompt(questions).then((answers) => {
    // handle user's answers here
  }).catch((error) => {
    console.error(error);
  });
}).catch((error) => {
  console.error(error);
});

