var express = require('express');
var router = express.Router();

var chatRoomController = require ("../controllers/chatRooms-controller");

router.get("/", chatRoomController.index);
router.get("/:id", chatRoomController.show);
router.post("/", chatRoomController.create);
router.put("/:id", chatRoomController.update);
router.delete("/:id", chatRoomController.destroy);

module.exports = router;