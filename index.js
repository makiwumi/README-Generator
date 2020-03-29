// variables that are required and are constant

const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const readMeFile = require('./generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

//Prompt user to enter information needed
function promptUser(){
    return inquirer.prompt(
        [
            {
                type: "input",
                name: "username",
                message: "What is your github username?"
            },
            {
                type: "input",
                name: "title",
                message: "What is the title of the repository?"
            },
            {
                type: "input",
                name: "description",
                message: "How would you describe repository?"
            },
            {
                type: "input",
                name: "installation",
                message: "What are the steps required to install your project?"
            },
            {
                type: "input",
                name: "usage",
                message: "Provide instructions and examples for use."
        
            },
            {
                type: "input",
                name: "license",
                message: "What are the limitations for your project?"
            },
            {
                type: "input",
                name: "Contributing",
                message: "Are there other developers that helped with your project?"
            },
            {
                type: "input",
                name: "tests",
                message: "Write tests for your applications"
            }
        ]
    )
};

//Get information from github api
promptUser()
  .then( (answers) => {
    const md = readMeFile.generateReadMe(answers);
    writeFileAsync("README.md", md);
    return answers; 
  })
  .then( (answers) => {
    const queryUrl = `https://api.github.com/users/${answers.github}/events/public`;

    console.log(queryUrl);
    axios.get(queryUrl).then( (response) => {
      console.log(response.type);
      let email = response.data[0].email;
      let pic = response.data[0].avatar_url; 

      console.log(email);
      console.log(pic);
      
    });
  })
      
  .then( () => {
    console.log("ReadMe was successfully generated");
  })
  .catch(function(error) {
    console.log(error);
  });