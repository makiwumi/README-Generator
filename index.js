// variables that are required and are constant

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api")
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
                message: "What license are you using?"
            },
            {
                type: "input",
                name: "Contributing",
                message: "Insert contributing information"
            },
            {
                type: "input",
                name: "tests",
                message: "Write tests for your applications"
            }
        ]
    )
};

module.exports = {
    promptUser
}

//Get information from github api

async function init(){
    try{
        const data = await promptUser();

        const apiCall = await api.getUser(data.username);

        const allInfo = {...data,...apiCall};

        const readme = readMeFile.generateMarkdown(allInfo);

        await writeFileAsync("GeneratedReadMe.md", readme);
    }

    //catch error or success
    catch(error){
        console.log(error);
    }
    finally{
        console.log("ReadMe was successfully generated");
    }
}
init();