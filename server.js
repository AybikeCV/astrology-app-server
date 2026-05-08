try {
  process.loadEnvFile();
} catch (error) {
  console.warn(".env file not found, using default environment variables.");
}

const jsonServer = require("json-server"); // to start building the server

const server = jsonServer.create(); // to create the Server Object. All BE logic will start from it.

const middlewares = jsonServer.defaults(); // to set common configurations from the jsonServer library
server.use(middlewares);

const router = jsonServer.router("db.json"); // automatically creates all CRUD routes for a DB as a json file
server.use(router);

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
  console.log(`Local Access at http://localhost:${PORT}`)
});

/*

 Planning routes
 -get test  //checked //http://localhost:5005
 -get all triplicities // checked //runs finally // http://localhost:5005/triplicities 
 -get all signs// checked // http://localhost:5005/signs
 -get a triplicity and all its signs // checked// http://localhost:5005/triplicities/:triplicityId?_embed=signs
 -get a single sign //checked// http://localhost:5005/signs/:signId
 -get all comments //checked// http://localhost:5005/comments
 -post create comment body, signId text //comments//checked// http://localhost:5005/comments
 -patch edit comment //body, text // checked//http://localhost:5005/comments/:commentId
 -delete comment //checked// http://localhost:5005/comments
*/