var app = angular.module("geochatApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
  .state("home",{
    url: "/",
    templateUrl:"./views/home.html",
    controller: "mainController"
  })
  .state("chat",{
    url: "/chat",
    templateUrl:"./views/chat.html",
    controller: "chatController"
  })
})