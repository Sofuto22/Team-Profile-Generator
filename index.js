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

const addUser = async () => {
    const choices = await inquirer.prompt({
      type: "list",
      name: "role",
      message: "Which employee are you adding? (Required)",
      choices: ["Engineer", "Intern"],
    });
    switch (choices.role) {
      default:
      case "Engineer":
        return addEngineer();
      case "Intern":
        return addIntern();
    }
  };
  
  function validateName(name) {
    if (name) {
      return true;
    } else {
      console.log("\n Please enter name!");
      return false;
    }
  }
  
  function validateId(id) {
    if (id) {
      if (employeesArr.map(({ id }) => id).includes(id)) {
        console.log("\n That ID already exists!");
        return false;
      }
      return true;
    } else {
      console.log("\n Please enter an ID!");
      return false;
    }
  }

  const addEngineer = async () => {
    const { name, id, email, github, addAnother } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: validateName,
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID? (Required)",
        validate: validateId,
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email? (Required)",
        validate: validateEmail,
      },
      {
        type: "input",
        name: "github",
        message: "What's your engineer's GitHub username?",
        validate: (githubInput_1) => {
          if (githubInput_1) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Do you want to add another employee?",
        default: "true",
      },
    ]);
    employeesArr.push(new Engineer(name, id, email, github));
    if (addAnother) {
      return addUser();
    }
    return employeesArr;
  };
  