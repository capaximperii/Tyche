 
var app = angular.module('myApp');

app.controller('resumeCtrl', function($scope, $timeout, storage) {

  $scope.cv = storage.get();

  $scope.onLoad = function () {
    $timeout(function() {
      var h1 = $("#heightmarker1").offset();
      var h2 = $("#heightmarker2").offset();
      var div =  $('#fullpage');
      var correction = Math.max(h1.top, h2.top) - div.offset().top;
      div.height(correction);
    }, 1000);
  }

  $scope.onLoad();
});
