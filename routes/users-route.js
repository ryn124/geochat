var express = require('express');
var router = express.Router();

var usersController = require ("../controllers/users-controller");

router.post("/login", usersController.login);

router.get("/", usersController.index);
router.get("/:id", usersController.show);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.destroy);

module.exports = router;