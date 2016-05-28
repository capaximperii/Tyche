 
var app = angular.module('myApp');

app.controller('resumeCtrl', function($scope, $timeout, $state, $stateParams) {

  $scope.cv = $stateParams.cv;

  $scope.events = [{
    badgeClass: 'info',
    title: 'Internship',
    company: 'Henoida',
    place: 'Paris',
    year: '2016'
  }, {
    badgeClass: 'warning',
    title: 'Masters',
    company: 'EPITA',
    place: 'Paris',
    year: '2014'
  },
  {
    badgeClass: 'info',
    title: 'Staff Engineer',
    company: 'Dell Wyse',
    place: 'Bangalore',
    year: '2012'
  },
  {
    badgeClass: 'info',
    title: 'Consultant Engineer',
    company: 'Qualcomm',
    place: 'Hyderabad',
    year: '2010'
  },{
    badgeClass: 'warning',
    title: 'Senior Engineer',
    company: 'TeamF1 (D-Link)',
    place: 'Hyderabad',
    year: '2009'
  },{
    badgeClass: 'warning',
    title: 'Staff Engineer',
    company: 'Comptrix Systems Pvt Ltd',
    place: 'Pune',
    year: '2009'
  }
  ];
  

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
