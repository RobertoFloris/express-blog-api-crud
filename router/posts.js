const express = require("express");
const postsController = require("../controllers/postsController");
const checkDataValidity = require("../middlewares/checkDataValidity");

const router = express.Router();

//index
router.get("/", postsController.index);

//show
router.get("/:id", postsController.show);

//store
router.post("/", checkDataValidity, postsController.store);

//update
router.put("/:id", checkDataValidity, postsController.update);

//modify
router.patch("/:id", checkDataValidity, postsController.modify);

//destroy
router.delete("/:id", postsController.destroy);

module.exports = router;