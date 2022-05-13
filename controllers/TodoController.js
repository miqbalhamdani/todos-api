const { Todo } = require("../models");

const findAll = async (_, res) => {
  try {
    const result = await Todo.findAll();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: `${error}` });
  }
};

const create = async (req, res) => {
  try {
    const result = await Todo.create({
      name: req.body.name,
      description: req.body.description,
      isDone: req.body.isDone,
      user: req.body.user
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: `${error}` });
  }
};

const update = async (req, res) => {
  try {
    const result = await Todo.update({
      name: req.body.name,
      description: req.body.description,
      isDone: req.body.isDone,
      user: req.body.user
    }, {
      where: { id: req.params.id }
    });

    res.status(200).json({
      message: "successful to update todo",
    });
  } catch (error) {
    res.status(400).json({ error: `${error}` });
  }
};

const destroy = async (req, res) => {
  try {
    const result = await Todo.destroy({
      where: { id: req.params.id }
    })

    res.status(200).json({
      message: "successful to delete todo",
    });
  } catch (error) {
    res.status(400).json({ error: `${error}` });
  }
};

module.exports = {
  findAll,
  create,
  update,
  destroy,
};
