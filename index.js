const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatedHtml = require("./src/generatedHtml");
const { connectableObservableDescriptor } = require("rxjs/internal/observable/ConnectableObservable");

const employees = [];

const startPrompt = async () => {
	const questions = await inquirer.prompt([
		{
			type: "input",
			message: "What is the team manager's name?",
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
	const { name, id, email, officeNumber } = questions;
	const manager = new Manager(name, id, email, officeNumber);
	employees.push(manager);
	console.log("quesions", questions);
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
		fs.writeFile("index.html",generatedHtml(employees), (err) => err ? console.log(err) : console.log("Generating html"))
	}
};

const addEngineer = async () => {
	const engData = await inquirer.prompt([
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
	let { name, id, email, github } = engData;
	let engineer = new Engineer(name, id, email, github);
	employees.push(engineer);
	console.log(employees);
	addTeamMember();
};

const addIntern = async () => {
	const internData = await inquirer.prompt([
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
	let { name, id, email, school } = internData;
	let intern = new Intern(name, id, email, school);
	employees.push(intern);
	console.log(intern);
	addTeamMember();
};

// function writeToFile(fileName, generatedHTML) {
// 	fs.writeFile(fileName, generatedHTML, (err) =>
// 		err ? console.log(err) : console.log("Success!")
// 	);
// }

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err ? console.log(err) : console.log("Great Success!");
	});
}

startPrompt();
