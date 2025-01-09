function checkDataValidity(req, res, next) {
  
  let {title, content, image, tags} = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    res.status(400);
    return res.json({
      message: "Il campo 'title' deve essere una stringa non vuota",
      status:400,
      error:"Bad Request"
    });
  }

  if (typeof content !== "string" || content.trim() === "") {
    res.status(400);
    return res.json({
      message: "Il campo 'content' deve essere una stringa non vuota",
      status:400,
      error:"Bad Request"
    });
  }

  if (typeof image !== "string" || image.trim() === "") {
    res.status(400);
    return res.json({
      message: "Il campo 'image' deve essere una stringa non vuota",
      status:400,
      error:"Bad Request"
    });
  }

  if (!Array.isArray(tags) || tags.length === 0 || !tags.every(tag => typeof tag === "string")) {
    res.status(400);
    return res.json({
      message: "Il campo 'tags' deve essere un array di stringhe non vuoto",
      status:400,
      error:"Bad Request"
    });
  }

  next();
}

module.exports = checkDataValidity;