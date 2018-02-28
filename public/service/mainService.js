app.service("mainService", function($http){
  var _userLog = {}
  this.userGet = function(){
    return $http.get("http://localhost:3000/users")
  }
  this.createUser = function(user){
    return $http.post("http://localhost:3000/users", user)
  }
  this.loginUser = function(user, password){
    _userLog.username = user;
    _userLog.password = password;
    console.log(_zipCode)
    _userLog.zip = _zipCode;
    console.log(_userLog)
    return $http.post("http://localhost:3000/users/login", _userLog)
  }
  var _userPos = "";
  this.userPos = function(pos){
    var _userPos = pos;
    console.log(_userPos);
  }
  this.returnPos = function(){
    console.log(_userPos)
    return _userPos
  }
  var _zipCode = "";
  this.userZip = function(zip){
    _zipCode = zip;
    console.log(_zipCode)
  }
  this.returnZip = function (){
    return _zipCode;
  }
  var _userInfo = {};
  this.loadUser = function(user){
    _userInfo = user;
  }
  this.returnLoadedUser = function (){
    return _userInfo
  }
})