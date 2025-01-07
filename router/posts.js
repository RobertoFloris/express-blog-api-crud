const express = require("express");
const postsController = require("../controllers/postsController")

const router = express.Router();

//index
router.get("/", postsController.index);

//show
router.get("/:id", postsController.show);

//store
router.post("/", postsController.store);

//update
router.put("/:id", postsController.update);

//modify
router.patch("/:id", postsController.modify);

//destroy
router.delete("/:id", postsController.destroy);

module.exports = router;