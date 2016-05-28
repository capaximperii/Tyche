 var app = angular.module('myApp');

app.controller('formCtrl', function($scope, storage, $state) {
	$scope.cv = storage.get();

	$scope.addEducation = function() {
		$scope.cv.education.push({degree: $scope.degree, university: $scope.university});
	};
	$scope.addSkill = function() {
		$scope.cv.skills.push({skill: $scope.skill, proficiency: $scope.proficiency});
	};
	$scope.addExtraSkill = function() {
		$scope.cv.extraskills.push($scope.extraskill);
	};
	$scope.addTimeline = function() {
		if($scope.isSchool == true) badgeClass = 'warning';
		else badgeClass = 'info';
		$scope.cv.timeline.push({year: $scope.year, place: $scope.place, title: $scope.title, company: $scope.company, badgeClass: badgeClass});
	};
	$scope.addReference = function() {
		$scope.cv.references.push({name: $scope.refname, company: $scope.refcompany, position: $scope.refposition, email: $scope.refemail});
	};


});