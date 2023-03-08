const pool = require('../db/connect.js')

// Get All Todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo')
    res.status(200).json({
      noOfTodos: todos.rowCount,
      data: todos.rows,
    })
  } catch (err) {
    res.json({ msg: err.message })
  }
}

// Get A Todo By Id
const getTodo = async (req, res) => {
  try {
    const { id } = req.params

    /**
     * Here we are using parameterised query method
     * pool.query('SQL-Query-String', [param1, param2, ...])
     * ❌ We should not provide the parameters by using template literals ❌
     */
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
    console.log(todo)
    res.status(200).json({ data: todo.rows[0] })
  } catch (err) {
    res.json({ msg: err.message })
  }
}

// Create A Todo
const createTodo = async (req, res) => {
  try {
    const { description } = req.body
    console.log(description)

    /**
     * Here we are using parameterised query method
     * pool.query('SQL-Query-String', [param1, param2, ...])
     * ❌ We should not provide the parameters by using template literals ❌
     *
     * Notice that we are returning the created todo using 'RETURNING *'
     */
    const savedTodo = await pool.query(
      'INSERT INTO todo (description) VALUES ($1) RETURNING *',
      [description]
    )
    res.status(201).json({ data: savedTodo.rows[0] })
  } catch (err) {
    res.json({ msg: err.message })
  }
}

// Update a Todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body

    const updatedTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
      [description, id]
    )

    res.status(200).json({ msg: `Todo with id ${id} updated` })
  } catch (err) {
    res.json({ error: err.message })
  }
}

// Delete a Todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
    res.status(204).json({ msg: `Todo deleted successfully` })
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo }
