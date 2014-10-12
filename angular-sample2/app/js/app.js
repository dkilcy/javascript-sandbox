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

demoApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home',{ templateUrl: 'partials/home.html' });
	$routeProvider.when('/contact',{ templateUrl: 'partials/contact.html' });
	$routeProvider.when('/dashboard',{ templateUrl: 'partials/dashboard.html' });
	$routeProvider.when('/dashboard/view1',{ templateUrl: 'partials/dashboard/partial1.html', controller: 'CustomerController' });
	$routeProvider.when('/dashboard/view2',{ templateUrl: 'partials/dashboard/partial2.html', controller: 'WidgetController' });
	
	$routeProvider.otherwise({ redirectTo: '/home'});
}]);
