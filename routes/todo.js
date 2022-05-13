const router = require('express').Router();

const todoController = require("./../controllers/TodoController");

router.get("/todo", todoController.findAll);
router.post("/todo", todoController.create);
router.put("/todo/:id", todoController.update);
router.delete("/todo/:id", todoController.destroy);

module.exports = router;
