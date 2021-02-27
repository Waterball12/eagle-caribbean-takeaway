# Eagle Caribbean Takeaway


[![Netlify Status](https://api.netlify.com/api/v1/badges/fbf4774b-3d4e-4596-83ed-52752101a795/deploy-status)](https://app.netlify.com/sites/eagle-takeaway/deploys)

<p align="center">
  <img width="300" height="300" src="https://github.com/Waterball12/eagle-caribbean-takeaway/blob/main/public/logo.png?raw=true">
</p>

## Installation requirements

- [Nodejs](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/)

Remember to add the binaries to your PATH environment variables if the installation hasn't yet

## Getting started

Copy the repository files or clone the repository with the following command

```git
git clone https://github.com/Waterball12/eagle-caribbean-takeaway.git

## Afterwards get inside the main directory
cd eagle-caribbean-takeaway-main
```

Now you should be able to run the following command to install all the required dependencies

```
npm install
```

After you've installed the dependencies you can start the local server using

```
npm start
```

Waiting till it create a build. Afterwards you'll be able to navigate to http://localhost:3000 to view the server running.

## Folder structure

    .
    ├── node_modules            # Ignore editing this directory
    ├── src                     # Source files
    │   ├── assets              # The assets of the projects such as img and css
    │   ├── components          # Contains the components used across the views
    │   ├── layout              # The layout used with the views
    │   ├── routes              # The available routes e.g. => / => takes to the Home view component
    │   ├── shared              # Shared functions
    │   └── views               # The main directory where to edit or create files
    ├── public                  # Public files, containing logo, manifest and anything that should be exposed publicy 
    └── README.md

## Anatomy

A brief anatomy of components used across the project

```jsx
// Essential to use JSX
import React from 'react';

// A component can also accept props so you can pass data like this
// <Component title="my Title" />
const Component = (props) => {
    const {
        title
    } = props; // Get the title from the props

    return (
        <div>
            // Rest of HTML
        </div>
    );
};

export default Component;
```


