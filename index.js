const fs = require("fs");
const inquirer = require("inquirer");
const { type } = require("os");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generate = require("./src/generateHTML");
const employeesArr = []; 

const mainMenu = async () => {
    const answer = await inquirer.createPromptModule([
        {
            type: "list",
            name: "menu",
            message: "Options",
            choices:["Add a team", "Exit"]
        },
    ]);
    switch (answer.menu) {
        case "Add a team":
         return addManager();
        case "Exit":
            console.log("Goodbye");
            break;
    }
};

const addManager = async () => {
    const { name, id, email, office} = await inquirer.createPromptModule([
        {
            type:"input",
            name:"name",
            message:"What is the manager's name?(Required)",
            validate: validateHeaderName,
        },
        
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID? (Required)",
            validate: validateId,

        },

        {
            type: "input",
            name: "email",
            message: "What is the manager's email? (Required)",
            validate: validateEmail, 

        },
        
        {
            type: "input",
            name: "office",
            message: "What is the manager's office? (Required)",
            validate: (officeInput) => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter office.");
                    return false;
                }
            },
        },
    ]);
    const manager = new Manager(name, id, email, office);
    employeesArr.push(manager);
    return addUser();
};
