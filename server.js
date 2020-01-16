//-----------------------Setup
//External Modules
const express = require("express"); // this looks in node_modules
const bodyParser = require("body-parser");

//Internal Modules
const db = require("./models");

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
//Documentation Route
app.get("/api/v1", (request, response) => {
  const doc = {
    status: 200,
    message: "Welcome to the Pokedex API.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1",
        description: "Describes all available endpoints."
      }
    ]
  };
  response.json(doc);
});

//Pokemon Routes
//index
app.get("/api/v1/pokemon", (request, response) => {
  db.Pokemon.find({}, (error, allPokemon) => {
    if (error) {
      return response // <==NOTE == this must be returned, or it will try to send two responses / won't stop executing code.
        .status(500)
        .json({ message: "Something went wrong", error: error });
    }
    const responseObj = {
      status: 200,
      data: allPokemon,
      length: allPokemon.length,
      requestedAt: new Date().toLocaleString()
    };
    response.status(200).json(responseObj);
  });
});
//create
app.post("/api/v1/pokemon", (request, response) => {
  response.json({ message: "pokemon create", body: request.body });
});

//show -> id === pokemon id
app.get("/api/v1/pokemon/:id", (request, response) => {
  response.json({ message: "pokemon show", id: request.params.id });
});

//update id === pokemon id
app.put("/api/v1/pokemon/:id", (request, response) => {
  response.json({
    message: "pokemon show",
    params: request.params,
    body: request.body
  });
});

//delete id === pokemon id
app.delete("/api/v1/pokemon/:id", (request, response) =>
  response.json({ message: "pokemon delete", params: request.params })
);
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
