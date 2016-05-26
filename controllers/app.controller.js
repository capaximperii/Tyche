 
var app = angular.module('myApp', ['angular-timeline']);

app.controller('myCtrl', function($scope, $http) {


  $scope.events = [{
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'First heading',
    content: 'Some awesome content.'
  }, {
    badgeClass: 'warning',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Second heading',
    content: 'More awesome content.'
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

});
