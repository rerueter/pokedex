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

//SECTION ---------------Start Server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
