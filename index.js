const express = require("express");
const app = express();

app.use(express.json());

const todo = require('./routes/todo');

app.use(todo);

app.listen(3000, () => {
  console.log("Your apps running in http://localhost:3000/ ...");
});
