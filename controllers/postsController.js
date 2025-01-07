const posts = require("../data/posts")

const index = (req, res) => {
  res.json(posts)
}

const show = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  if(!post){
    res.status(404)
    return res.json({
      message: "Post non trovato",
      error: "Not Found"
    })
  }
  res.json(post)
}

const store = (req, res) => {
  res.send("Aggiungo un nuovo post")
}

const update = (req, res) => {
  res.send("Modifico il post con id " + req.params.id)
}

const modify = (req, res) => {
  res.send("Modifico parzialmente il post con id " + req.params.id)
}

const destroy = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  if(!post){
    res.status(404)
    return res.json({
      message: "Post non trovato",
      error: "Not Found"
    })
  }

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  
  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}
