import express from "express"

const app = express()
const PORT = process.env.PORT || 3001

app.get("/api/v1/hello", (req, res) => {
  res.status(200).json({ msg: "Hello world" })
})

app.listen(PORT, () => {
  console.log("Server running...")
})
