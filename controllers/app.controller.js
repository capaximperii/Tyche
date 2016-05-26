 
var app = angular.module('myApp', ['angular-timeline']);

app.controller('myCtrl', function($scope, $timeout) {


  $scope.events = [{
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'First role',
    company: 'Some awesome company.',
    place: 'city name'
  }, {
    badgeClass: 'warning',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Second role',
    company: 'Some awesome company.',
    place: 'city name'
  }];
  
  $scope.pageImage = function() {
    html2canvas(document.body, {  
      onrendered: function(canvas) {
        // $("#page").hide();
        document.body.appendChild(canvas);
        // window.print();
        // $('canvas').remove();
        // $("#page").show();
      }
    });
  };

  $scope.onLoad = function () {
    $timeout(function() {
      var h = $(document).height();
      var div =  $('#fullpage');
      console.log(h);
      div.height(h);
    }, 1000);
  }

  $scope.onLoad();

});
