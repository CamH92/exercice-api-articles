const express = require("express");
const usersController = require("./users.controller");
const router = express.Router();
const articlesController = require("./api/articles/articles.controller"); 

router.get("/", usersController.getAll);
router.get("/:id", usersController.getById);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);
router.get("/:userId/articles", articlesController.getUserArticles);


module.exports = router;


