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
	$routeProvider.when('/view1',{ templateUrl: 'partials/partial1.html', controller: 'CustomerController' });
	$routeProvider.when('/view2',{ templateUrl: 'partials/partial2.html', controller: 'WidgetController' });
	$routeProvider.otherwise({ redirectTo: '/view1'});
}]);



	