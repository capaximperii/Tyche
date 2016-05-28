var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $state) {
  $state.go('form');
});