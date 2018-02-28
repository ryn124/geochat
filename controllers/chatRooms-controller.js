var ChatRoom = require("../models/chatroom")

var chatRooms = [];
chatRooms.push(new ChatRoom("92804"))
console.log(chatRooms)

function index(req, res){
  res.json(chatRooms)
};
function show(req, res){
  var zip = req.params.id;
  console.log(zip)
  for (var i = 0; i < chatRooms.length; i++){
    console.log("loop start")
    if(zip == chatRooms[i].zipCode){
      console.log("Chatroom found")
      console.log(chatRooms[i])
      res.status(200).json(chatRooms[i].zipCode)
      return;
    }
    else{
      console.log("New chatroom being made")
      chatRooms.push(new ChatRoom(zip))
      console.log(chatRooms[chatRooms.length - 1].zipCode)
      res.status(200).json(chatRooms[chatRooms.length - 1])
      return;
    }
  }
  res.status(404).json({error: "No ChatRoom was at " + zip})
};
function create(req, res){
  console.log("ChatRoom creation disabled");
  res.json(chatRooms);
};
function update(req, res){
  console.log("ChatRoom Update Disabled")
  // var id = req.params.id;
  // var body = req.body;
  // console.log(id);
  // console.log(body);
  // for (var i = 0; i < chatRooms.length; i++){
  //   if(id == chatRooms[i].id){
  //     console.log(chatRooms[i])
  //     chatRooms.splice(i, 1);
  //     chatRooms.push(new ChatRoom(body.name, body.phone, body.location));
  //     res.status(200).json(chatRooms);
  //     return;
  //   }
  // }
  res.status(404).json({error: "No ChatRoom was at ID " + id})

};
function destroy(req, res){
  console.log("Destruction disabled")
  // var id = req.params.id;
  // console.log(id);
  // for (var i = 0; i < chatRooms.length; i++){
  //   if(id == chatRooms[i].id){
  //     chatRooms.splice(i, 1);
  //     res.status(200).json(chatRooms);
  //     return;
  //   }
  // }
  // res.status(404).json({error: "No ChatRoom was at ID" + id})
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}