var app = angular.module('myApp');

app.config(function ($stateProvider) {
	$stateProvider
		.state('form', {
			url: '/',
			views: {
				'content@': {
					templateUrl: 'fragments/form.html',
					controller: 'formCtrl'
				}
			}
		})
		.state('resume', {
			url: '/resume',
			views: {
				'content@': {
					templateUrl: 'fragments/resume.html',
					controller: 'resumeCtrl'
				}
			},
			params: {cv: null}
		});
	});