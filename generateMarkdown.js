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
  ${allInfo.description}

  ## Usage
  ${allInfo.description}

  ## License
  
  ${allInfo.license}

  ## Contributing
  
  ![GitHub contributors](https://img.shields.io/badge/contributor-${allInfo.username}-blue)

  ## Tests

  ${allInfo.tests}
  `
}
// Print readme
module.exports = {
  generateMarkdown:generateMarkdown
}