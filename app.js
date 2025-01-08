const express = require("express");
const postsRouter = require("./router/posts")

const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server dei post")
})

app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log("Sono in ascolto alla porta " + port);
})
