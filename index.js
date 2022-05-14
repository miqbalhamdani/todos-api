const express = require("express");
const app = express();

app.use(express.json());

const todo = require('./routes/todo');

app.use(todo);

const swaggerJson = require("./todo-api-documentation.json");
const swaggerUI = require("swagger-ui-express");

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))

app.listen(3000, () => {
  console.log("Your apps running in http://localhost:3000/ ...");
});
