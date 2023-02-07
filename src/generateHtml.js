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
  let output = `
  <div class="card col-4">
  <div class="card-body">
    <h3 class="card-title">${answers.name}</h3>
    <h5 class="card-text"><i class="${
      answers.icon
    } me-2"></i>${answers.getRole()}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answers.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${answers.email}">${
  answers.email
}</a></li>
    <li class="list-group-item">${answers.wildcard}${
  answers.wildcardInfo
}</li>
  </ul>
</div>
`;
return output;
}
