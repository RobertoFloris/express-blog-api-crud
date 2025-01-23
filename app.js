const express = require("express");
const postsRouter = require("./router/posts");
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const cors = require("cors")

const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(express.json())

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server dei post")
})

app.use("/posts", postsRouter)

app.use(errorsHandler);

app.use(notFound);

app.listen(port, () => {
  console.log("Sono in ascolto alla porta " + port);
})
