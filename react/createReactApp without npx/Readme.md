<!-- So we have a task to create React App without npx Create React App -->
<!-- This question is maybe asked to check your ground knowledge about react and how it creates the React DOM tree -->
Steps to do so are :
Step 1) Create or initialise the node package using the npm init command
Step 2) Install the most important react Packages that are ... react,react-dom,react-scripts
Step 3) Create a simple index.html on root directory and just declare one div with add 'root' or whatever you want and insert one external js file called index.js which preferably must be stored in src/directory
Step 4)In the index.js file write the below code 
  import ReactDOM from 'react-dom/client';
  import React from react;

  const rootElem= ReactDOM.createRoot(document.getElementById('root'));
  rootElem.render(
   <React.StrictMode>
   <AnyElementyouWant-App/>
   </React.StrictMode>
  )
Step 5) In Package.json in the scripts for build and start write:-
 scripts:{
  "build":"react-scripts build"
  "start":"react-scripts start"
 }
Step 6) Start the server using npm start

And your self made without the npx create-react-app react app is ready
