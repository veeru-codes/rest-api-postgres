const express = require('express')
const {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos.js')

const todoRouter = express.Router()

todoRouter.route('/').get(getAllTodos).post(createTodo)

todoRouter.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo)

module.exports = todoRouter
