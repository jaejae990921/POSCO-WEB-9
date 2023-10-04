const { Todo } = require('../models');

// show all todos
const get_todo = async (req, res) => {
  const result = await Todo.findAll();

  res.json({ data: result });
};

// create a new todo
const post_todo = async (req, res) => {
  const { title } = req.body;

  const result = await Todo.create({ title });

  res.json({ data: result });
};

// edit a specific todo
const patch_todo = (req, res) => {
  const { todoId } = req.params;
  const { title, done } = req.body;

  Todo.update({ title, done }, { where: { id: todoId } }).then(() => {
    res.json({ result: true });
  });
};

// remove a specific todo
const delete_todo = (req, res) => {
  const { todoId } = req.params;

  Todo.destroy({ where: { id: todoId } }).then(() => {
    res.json({ result: true });
  });
};

module.exports = { get_todo, post_todo, patch_todo, delete_todo };
