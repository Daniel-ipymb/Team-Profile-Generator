const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateHTML = require("./src/generateHTML");

const startPrompt = async () => {
	await inquirer.prompt([
		{
			type: "input",
			message: "What is the tem manager's name?",
			name: "name",
		},
		{
			type: "input",
			message: "What is the employee's ID?",
			name: "id",
		},
		{
			type: "input",
			message: "What is the employee's email address?",
			name: "email",
		},
		{
			type: "input",
			message: "What is the employee's office number?",
			name: "officeNumber",
		},
	]);
	addTeamMember();
};

const addTeamMember = async () => {
	const answer = await inquirer.prompt([
		{
			type: "list",
			message: "Do you wish to add another team member?",
			name: "addTeamMember",
			choices: ["add an engineer", "add an intern", "finish bulding team"],
		},
	]);
	console.log(answer);
	if (answer.addTeamMember === "add an engineer") {
		addEngineer();
	} else if (answer.addTeamMember === "add an intern") {
		addIntern();
	} else if (answer.addTeamMember === "finish building team") {
    createTeam()
	}
};

const addEngineer = async () => {
	await inquirer.prompt([
		{
			type: "input",
			message: "What is the engineer's name?",
			name: "name",
		},
		{
			type: "number",
			message: "What is the engineer's ID?",
			name: "id",
		},
		{
			type: "input",
			message: "What is the engineer's email address?",
			name: "email",
		},
		{
			type: "input",
			message: "What is the engineer's GitHub username?",
			name: "github",
		},
	]);
  addTeamMember()
};

const addIntern = async () => {
	await inquirer.prompt([
		{
			type: "input",
			message: "What is the intern's name?",
			name: "name",
		},
		{
			type: "number",
			message: "What is the intern's ID?",
			name: "id",
		},
		{
			type: "input",
			message: "What is the intern's email address?",
			name: "email",
		},
		{
			type: "input",
			message: "What school is the intern from?",
			name: "school",
		},
	]);
  addTeamMember()
};

function writeToFile(fileName, generatedHTML ) {
  fs.writeFile("./dist/index.html", generatedHTML, (err) => 
  err ? console.log(err) : console.log('Success!'))
}

function createTeam() {

}



startPrompt();
