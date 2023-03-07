const express = require("express")
const pool = require("./db/connect.js")

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get("/api/v1/hello", (req, res) => {
  res.status(200).json({ msg: "Hello world" })
})

// Create a Todo
app.post("/api/v1/todo", async (req, res) => {
  try {
    const { description } = req.body
    console.log(description)

    const savedTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    )
    res.status(201).json({ data: savedTodo })
  } catch (err) {
    res.json({ msg: err.message })
  }
})

app.listen(PORT, () => {
  console.log("Server running...")
})
