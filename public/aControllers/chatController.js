app.controller("chatController", function ($scope, $state, $stateParams, mainService) {
   socket.on('chat', function (data) {
    console.log(data)
    $scope.$apply($scope.chatLog.push(data));
    console.log($scope.chatLog);
  })
  
  $scope.chatLog = [];
  $scope.zipCode = mainService.returnZip(); 
  $scope.userPos = mainService.returnPos();
  $scope.userInfo = mainService.returnLoadedUser();
  $scope.testClick = function () {
    socket.emit('chat', {
      message: $scope.textArea,
      username: $scope.userInfo.username
    })
    $scope.textArea = "";
  }
  $scope.initMap = function () {
    console.log($scope.userPos)
    // var coords = LatLng(lat: $scope.geoLat, lng:$scope.geoLng);
    var map = new google.maps.Map(document.getElementById('mapx'), {
      zoom: 15,
      center: new google.maps.LatLng($scope.userPos)
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng($scope.userPos),
      map: map
    });
    console.log(map.center)
    console.log("initMap end")
  }
  $scope.initMap()
  
})