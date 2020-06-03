# React Served

A React + Express template application.

Updated for latest packages as of June 2, 2020; React v16.13.1
Adds styled-components, axios packages and es-lint and prettier configurations.
Updates to latest CRA files and format, using hooks on demo page.

To enable all eslint and prettier features in Visual Studio Code, add this to your project workspace settings:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "eslint.alwaysShowStatus": true,
  "editor.tabSize": 2
}
```

## Prerequisites

- [create-react-app](https://github.com/facebook/create-react-app)

## Installing

```bash
git clone 'this-repo-url' app-name
cd app-name
npm install
```

## Running The App

```bash
npm start
```

The "Welcome to React, Served" comes from the Express server.

### What Is Happening ?

Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

## Production

For production, Express will serve your app.

```bash
npm build
```

Visit the Express app at 'http://localhost:3001' and you will see your app served from the 'build' folder. That's all there is to it!

Revised from: [Introducing Express React Starter](https://medium.com/burke-knows-words/introducing-express-react-starter-b6d299206a3a)
