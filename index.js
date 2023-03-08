const express = require("express")
const todoRouter = require("./routes/todo.router.js")

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use("/api/v1/todos", todoRouter)

app.listen(PORT, () => {
  console.log("Server running...")
})
