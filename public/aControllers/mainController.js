app.controller("mainController", function ($scope, $state, $stateParams, mainService, $http) {
  // $scope.zipTest = function (){
  //   console.log($http.get('https://maps.googleapis.com/maps/api/geocode/json?', {
  //     params: {
  //       address: "92841",
  //     }
  //   }))
  // }
  // $scope.zipTest()
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos)
      mainService.userPos(pos);
      var geocoder = new google.maps.Geocoder
      geocoder.geocode({ 'location': pos }, function (results, status) {
        if (status === 'OK') {
          if (results[0]) {
            console.log(results[0]);
            mainService.userZip(results[0].address_components[7].long_name)
          }
        }
      })
    })
  };
  $scope.zipTest = function(){
    mainService.userZip($scope.zipTester)
  }
  $scope.loginShow = true;
  $scope.registerShow = function () {
    if ($scope.loginShow == true) {
      $scope.loginShow = false;
    }
    else if ($scope.loginShow == false) {
      $scope.loginShow = true;
    }
  }

  // $scope.testClick = function () {
  //   socket.emit('chat', {
  //     message: $scope.textArea
  //   })
  //   $scope.textArea = "";
  // }

  socket.on('chat', function (data) {
    console.log(data)
  })
  $scope.userGet = function () {
    mainService.userGet()
      .then(function (response) {
        console.log(response)
      })
  }
  $scope.userGet();
  $scope.registerUser = function () {
    console.log($scope.register)
    if ($scope.register !== undefined) {
      mainService.createUser($scope.register)
        .then(function (response) {
          $scope.userGet();
          $scope.registerShow();
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
  $scope.loginButton = function (user, pass){
    mainService.loginUser(user, pass)
    .then(function(response){
      socket.emit("login", {
        zipCode: response.data.location
      })
      console.log(response.data)
      mainService.loadUser(response.data)
      $state.go("chat")
    })
    .catch(function(error){
      console.log(error)
    })
  }
  // $scope.login();
  $scope.zipTestHide = true;
  $scope.testerOn = function (){
    $scope.zipTestHide = false;
  }
})