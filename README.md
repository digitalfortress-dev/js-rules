<p align="center">
  <a href="https://www.digitalfortress.dev/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg">
      <img alt="Digital Fortress logo" src="https://digitalfortress-s3-bucket-vpcxuhhdwecuj.s3.amazonaws.com/Group+1410083530.svg">
    </picture>    
  </a>
</p>

---

# ESLint, Prettier, TailwindCSS, ReactJS, NextJS TypeScript Configuration

## Overview

This library provides a fully configured setup for ESLint, Prettier, TailwindCSS, React, React Hooks, NextJS, TypeScript, and import sorting. It ensures code quality, best practices, and consistency across your TypeScript and ReactJS/NextJS projects with TailwindCSS.

### Key Features:

- **ESLint**: Linting rules for TypeScript, React, React Hooks, and import sorting.
- **Prettier**: Automated code formatting with Prettier and integrated TailwindCSS class sorting.
- **TailwindCSS**: Linting for TailwindCSS class names.
- **React and React Hooks**: Ensures best practices for React and React Hooks.
- **NextJS**: Linting for NextJS code.
- **TypeScript**: Linting for TypeScript code.
- **Import Sorting**: Enforces a consistent import order.

## Installation:

```sh
npm install --save-dev git@github.com:digitalfortress-dev/js-rules.git
```

### ESLint Configuration

### .eslintrc.js

In the root directory of your project, you need to create a file named `.eslintrc.js` with the following content:

```javascript
const config = require("js-rules").eslint;

// You can update the ESLint config by modifying the properties
// If you want to extend ESLint with another configuration
config.extends.push("plugin:react/recommended");
// If you want to add a plugin
config.plugins.push("react");
// If you want to modify or add a specific rule
config.rules["react/prop-types"] = "off";

module.exports = config;
```

## Prettier Configuration

### .prettierrc.js

In the root directory of your project, you need to create a file named `.prettierrc.js` with the following content:

```javascript
const config = require("js-rules").prettier;

// You can update the Prettier config by modifying the properties
// If you don't want to add a semicolon at the end of lines
config.semi = false;

module.exports = config;
```

## Visual Studio Code Configuration

To ensure the best development experience, you can create a `.vscode` folder in the root of your project and add a `settings.json` file with the following configuration:

### Creating the `.vscode` Folder

1. Create a folder named `.vscode` in the root directory of your project.
2. Inside the `.vscode` folder, create a file named `settings.json`.
3. Add the following content to `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "prettier.requireConfig": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```
