var User = require("../models/user")

var users = [];
var userId = 0;
users.push(new User(userId++, "userOne","pass", "999999999", "here"));
users.push(new User(userId++, "userTwo","pass", "999999999", "here"));
users.push(new User(userId++, "userThree","pass", "999999999", "here"));
users.push(new User(userId++, "userFour","pass", "999999999", "here"));
users.push(new User(userId++, "userFive","pass", "999999999", "here"));

function index(req, res){
  res.json(users)
};
function show(req, res){
  var id = req.params.id;
  console.log(id);
  for (var i = 0; i < users.length; i++){
    if(id == users[i].id){
      res.status(200).json(users[i])
      return;
    }
  }
  res.status(404).json({error: "No User was at ID: " + id})
};
function create(req, res){
  console.log("User created");
  var body = req.body;
  console.log(body);
  users.push(new User(userId++, body.username, body.password, body.phone, body.location));
  res.json(users);
};
function update(req, res){
  var id = req.params.id;
  var body = req.body;
  console.log(id);
  console.log(body);
  for (var i = 0; i < users.length; i++){
    if(id == users[i].id){
      console.log(users[i])
      users.splice(i, 1);
      users.push(new User(userId++, body.username, body.password, body.phone, body.location));
      res.status(200).json(users);
      return;
    }
  }
  res.status(404).json({error: "No User was at ID " + id})

};
function destroy(req, res){
  var id = req.params.id;
  console.log(id);
  for (var i = 0; i < users.length; i++){
    if(id == users[i].id){
      users.splice(i, 1);
      res.status(200).json(users);
      return;
    }
  }
  res.status(404).json({error: "No User was at ID" + id})
};

function login(req, res){
  console.log("LOGIN")
  console.log(req.body)
  var username = req.body.username;
  var password = req.body.password;
  var zip = req.body.zip;
  for (var i = 0; i < users.length; i++){
    console.log(users[i].username)
    if(username == users[i].username && password == users[i].password){
      users[i].location = zip;
      res.status(200).json(users[i])
      return;
    }
  }
  res.status(404).json({error: "No User was found"})
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy,
  login,
  users
}