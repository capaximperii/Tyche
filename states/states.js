var app = angular.module('myApp');

app.config(function ($stateProvider) {
	$stateProvider
		.state('form', {
			url: '/',
			views: {
				'content@': {
					templateUrl: 'fragments/form.html',
					controller: 'myCtrl'
				}
			}
		})
		.state('resume', {
			url: '/resume',
			views: {
				'content@': {
					templateUrl: 'fragments/resume.html',
					controller: 'myCtrl'
				}
			}
		});
	});