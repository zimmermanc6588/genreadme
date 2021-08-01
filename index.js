const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require('./generateMarkdown.js');


const questions = [
    {
        type :`input`,
        name: 'username',
        message: "What is your GitHub username? (everything before @)",
    }, {
        type: 'input',
        name: 'repo',
        message: "What is the name of your GitHub repo?",
    },
    {
        type: 'input', 
        name: 'projectTitle',
        message: "What is the title of your project?",
    },
    {
        type:'input',
        name:'benefits',
        message:'What are some benefits for the use of your project?',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps for installation?',
    },
    {
        type:'lnput',
        name:'licenses',
        message:'What type of license for your project?',
    },
    {
       type:'input',
       name:'contributions',
       message:'Were there any contributions and/or collaborators to your project',
    },
    {
      type:'input',
      name:'test',
      message:'What steps were taken to test project?',
   },
]
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
    fs.writeFile('GenerateREADME/GenerateREADME.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("You did it!"))})
 }

init();

