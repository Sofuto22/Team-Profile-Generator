const Employee = require("../lib/Employee");

function generateCards(answers) {
  const role = answers.getRole();
  console.log(role);
  switch (role) {
    case "Manager":
      answers.wildcard = "Office Number: ";
      answers.wildcardInfo = answers.getOfficeNumber();
      answers.icon = "fas fa-mug-hot";
      break;
    case "Engineer":
      answers.wildcard = "GitHub: ";
      answers.wildcardInfo = answers.getGithub();
      answers.icon = "fas fa-glasses";
      break;
    case "Intern":
      answers.wildcard = "School: ";
      answers.wildcardInfo = answers.getSchool();
      answers.icon = "fas fa-user-graduate";
      break;
  }
}