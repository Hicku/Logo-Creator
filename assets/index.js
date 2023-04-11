const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest")

const questions = [
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
        type: "list",
        name: "shape", 
        message: "What shape do you want your logo to be?",
        choices: ["square", "circle", "triangle"]  
    },
    {
        type: "input",
        name: "text",
        message: "What text do you want in the logo?"           
    },
    {
        type: "list",
        name: "font",
        message: "What font do you want to use for your text?",
        choices: ["Arial", "Helvetica", "Times New Roman", "Verdana"]
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
    {
        type: "list",
        name: "textPlacement",
        message: "Where would you like to put your text?",
        choices: ["Above the shape", "Below the shape", "To the right of the shape", "To the left of the shape", "Inside the shape (centre)", "Inside the shape (bottom)",  "Inside the shape (top)"]
    }
]