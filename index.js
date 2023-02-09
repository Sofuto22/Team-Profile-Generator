const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

function validateInfo() {
  if (x!= "") {
    return true;
  } else {
    alert ("Must enter the info required");
    return false;
  }
}

inquirer.prompt( [{
  type:"input",
  name:"name",
  message: "Name of manager?",
  validate: validateInfo,
},

{
  type:"input",
  name:"office",
  message:"What is the office number for the manager?",
  validate: validateInfo,
},

{
  type:"input",
  name:"email",
  message:"What is the manager's email?",
  validate: validateInfo,
},

{
  type:"input",
  name: "ID",
  message: "What is the manager's ID number?",
  validate: validateInfo,
},
{
    type:"input",
    names:"name",
    message: "What is your name?",
    validate:validateInfo,
},
{
    type:"input",
    name:"ID",
    message:"What is the engineer's ID?",
    validate:validateInfo,
},
{
    type:"input",
    name:"school",
    message:"What school did the engineer attend?",
    validate:validateInfo,
},
  
{
    type:"input",
    name:"email",
    message:"What is the engineer's email?",
    validate:validateInfo,
},

{
    type:"input",
    name:"Github",
    message:"What is the Github username?",
    validate:validateInfo,
},



{
    type:"input",
    name:"name",
    message:"What is the employee's name?",
    validate:validateInfo
},
{
    type:"input",
    name:"ID",
    message:"What is employee ID?",
    validate:validateInfo,
},
{
    type:"input",
    name:"email",
    message:"What is employee's email?",
    validate:validateInfo,
 },


  
  {
    type:"input",
    name:"name",
    message:"What is the intern's name?",
    validate: validateInfo,

  },

  {
    type:"input",
    name:"ID",
    message:"What is intern's ID?",
    validate:validateInfo,
  },

  {
    type:"input",
    type:"email",
    message:"What is the email address of the intern?",
    validate:validateInfo,
  },

  {
    type:"input",
    name:"school",
    message:"Which school does the intern attend?",
  },
])

.then(answers => {
  console.info('Answers:', answers);
});




