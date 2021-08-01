// genterate readme with a fuction

function generateMarkdown(data){


return `# Table of Contents
1. [Username](#Github username)
2. [Repo](#Repo)
3. [ProjectTitle](#Title)
4. [Benefits](#Benefits)
5. [Installation](#Installation)
6. [Licenses](#Licenses)
7. [Contributions](#Contributions)
8. [Test](#Test)

# ${data.projectTitle}
# Details
${data.details}
# Installation
${data.installation}
# Benefits
${data.benefits}
# Licenses
${data.licenses}
# Contributions
${data.contributions}
# Test
${data.test}
`;
}

module.exports = generateMarkdown;