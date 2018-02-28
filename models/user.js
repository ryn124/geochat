var User = function(id, username, password, phone, location){
  this.id = id;
  this.username = username;
  this.password = password;
  this.phone = phone;
  this.location = location;
  this.socketId = "";
}
module.exports = User;