# Setting Up Your Development Environment

This guide will help you set up your local machine with all the tools you will need (and the webdev industry).

Before you begin, create a folder for this cohort wherever you want to store any GitHub repos that you will be cloning on your device in this cohort. You can name it include, cohort, or literally anything you want to. If you choose to name it "include", do not use a '#' in your folder name, it'll cause a bunch of problems later.

## 1. NODE.JS

Node.js is a runtime environment that is used to run Javascript code. It comes with the Node Package Manager (npm) that helps us manage the Javascript packages used in our project. To set up node.js:

1. Download the Node.js installer for your OS from https://nodejs.org/en/download/current
2. Run the installer and follow the installation wizard.
3. Once the installation finishes, open a terminal on VSCode and type _node --version_ to verify your node installation. Type _npm --v_ to verify your npm installation.

   a. If you get an error saying that node or npm is not recognized as a command, try restarting VSCode to see if the issue fixes itself. (If you had VSCode opened while installing Node, this should fix it.)
   b. If the problem persists, search for _Environment variables_ in your Start menu. Click on _Edit your Environment variables_. Click on _Environment Variables_ in the new window that opens up.
   c. Find the variable _Path_ and click on _Edit_.
   d. Check for _C:\Program Files\nodejs\\_ in the list of paths that appear. If it's not there, click on _New_ and add it to the list.
   e. Restart VSCode and it should ideally work now.

## 2. ESLINT EXTENSION

ESLint is an extension that ensures that your code adheres to certain code style. It also auto-formats your code on save in VSCode. To enable it:

1. Go to the Extensions tab on VSCode and install _ESLint_.
2. Once it is installed, open your Command Palette by pressing **Ctrl + SHift + P**/**Command + Shift + P** and search for **Preferences: Open Workspace Settings (JSON)**. Open the file and add this code into the file. This will autoformat your code on save and also configure tab sizes:

   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "eslint.validate": ["javascript"],
     "[javascript]": {
       "editor.indentSize": 2
     },
     "[typescript]": {
       "editor.indentSize": 2
     }
   }
   ```

## Getting Started

Set up:

`npm install` for package installations. This will install all packages specified in the package.json file.

`npm install -g vercel@latest` globally install vercel. This may require you to use the sudo command if you need more permissions.

Run the development server:

```bash
npm run dev
```