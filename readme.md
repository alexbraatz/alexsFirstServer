Emirp Node/Express Intro

[ ] set up folders

in root folder:

server
server/public/
server/public/scripts
server/public/vendors
server/public/styles

[ ] init git
[ ] add .gitignore (in root folder, add .DS_Store & node_modules)
[ ] add index.html to "server/public" folder
[ ] add client.js.html to "server/public/scripts" folder
[ ] add JQuery to "server/public/vendors" folder
[ ] create server.js file in "server" folder
[ ] npm install express (showld have a "node_modules" folder in root)
[ ] edit server.js (require express, set up express statict)
[ ] npm init (this will initialize an npm project 
    *error?* 'npm init --y' will use default names)
[ ] update server.js:

```
// require express to make  a server
const express = require( 'express' );
// our app
const app = express();
// tell the server to use "server/public" as the root of the webist
express.static( 'server/public' );
// tell our app to spin up and listen
app.listen( 5000, ()=>{
    console.log( 'server is up' );
});
```