//-----------------------Setup
//External Modules
const express = require("express"); // this looks in node_modules
const bodyParser = require("body-parser");

//Internal Modules

//Instanced Modules (modules that must be invoked to be accessed and used)
const app = express();

//SECTION ---------------Configuration Variables
const PORT = 3000;

//SECTION ---------------Middleware
app.use(bodyParser.json()); // creates request.body - this looks at the 'body' of a request and turns json strings into objects we can use

//SECTION --------------- Routes
//NOTE --- View Routes
app.get("/", (request, response) => {
  response.send(`<h1>Welcome to the Pokedex API</h1>`);
});
//NOTE --- API Routes
//Pokemon Routes
//Trainer Routes

// --- 404 Route
app.get("/*", (request, response) => {
  response
    .status(404)
    .send("<h1>404</h1><h3>You used SPLASH. It wasn't very effective.</h3>");
});

//SECTION ---------------Start Server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
