const fs = require("fs");
const inquirer = require("inquirer");


console.log("generate readme")
const questions = [
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
];
