const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
        {
          type: "list",
          name: "color",
          message: "What color do you want for your logo?",
          choices: ["red", "green", "blue", "yellow", "orange"]
        },
        { 
          type: "list",
          name: "shape", 
          message: "What shape do you want your logo to be?",
          choices: ["square", "circle", "triangle", "rectangle", "star"]  
        },
        {
         type: "input",
         name: "text",
         message: "What text do you want in the logo?"           
        },
]