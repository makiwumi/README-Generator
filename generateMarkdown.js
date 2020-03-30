function generateMarkdown(allInfo) {
  return ` #  ${allInfo.title}
  ## Description

  ${allInfo.description}
  
  ## Table of Contents
  
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests) 
 
  ## Installation
  ${allInfo.installation}

  ## Usage
  ${allInfo.usage}

  ## License
  
  Copyright (c) ${allInfo.license}

  ## Contributing
  
  ![GitHub contributors](https://img.shields.io/badge/contributor-${allInfo.contributing}-blue)

  ## Tests

  ${allInfo.tests}
  `
}
// Print readme
module.exports = {
  generateMarkdown:generateMarkdown
}
