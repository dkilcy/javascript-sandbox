'use strict';

var demoApp = angular.module('demoApp', 
	[
	  'ngRoute',
	  'demoApp.filters',
	  'demoApp.services',
	  'demoApp.directives',
	  'demoApp.controllers'
	]);
		
// Module with config and route 		

demoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/home',{ templateUrl: 'templates/home.html' });
	$routeProvider.when('/contact',{ templateUrl: 'templates/contact.html' });
	$routeProvider.when('/dashboard',{ templateUrl: 'templates/dashboard.html' });
	$routeProvider.when('/dashboard/view1',{ templateUrl: 'templates/dashboard/partial1.html', controller: 'CustomerController' });
	$routeProvider.when('/dashboard/view2',{ templateUrl: 'templates/dashboard/partial2.html', controller: 'WidgetController' });
	
	//$routeProvider.when('/signup', { templateUrl: 'templates/signup.html', controller: 'SignupController' });
	//$routeProvider.when('/login', { templateUrl: 'templates/login.html', controller: 'LoginController' });
	//$routeProvider.when('/logout', { templateUrl: 'templates/login.html', controller: 'LoginController' });
	
	$routeProvider.otherwise({ redirectTo: '/home'});
	
	//$locationProvider.html5Mode(true);

}]);
