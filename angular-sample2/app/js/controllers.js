'use strict';

/* Controllers */

var demoApp = angular.module('demoApp'); // retrieve existing module declared in app.js

demoApp.factory('customerFactory', function() {
	var customers = [{ name:'Foo Bar', city:'Baz'} ];
	
	var factory = {};
	factory.getCustomers = function() {
		 // AJAX call 
		return customers; 
	};
	factory.postCustomer = function( customer ) { 
		
	};
	
	return factory;
});

demoApp.factory('widgetFactory', function() {
	var widgets = []; 
	
	var factory = {};
	factory.getWidgets = function() {
		 // AJAX call 
		return [{ name:'ItemX', desc:'Widget X'} ]; 
	};
	factory.postWidget = function( widget ) { 
		
	};
	
	return factory;
});

angular.module('demoApp.controllers', [])
.controller('CustomerController', ['$scope', 'customerFactory', function($scope, customerFactory) {

	$scope.customers = [];
		
	// initialization routine.  Private init() function.  All init routines for factory calls in 1 place 
	// Ex: get initial dropdowns, etc 
	
	init(); 
	
	function init() {
		$scope.customers = customerFactory.getCustomers();
	};
	
	$scope.addCustomer = function() {
		$scope.customers.push( 
		{
			name : $scope.newCustomer.name,
			city : $scope.newCustomer.city
		});
	};
	  
}])
.controller('WidgetController', ['$scope', 'widgetFactory', function($scope, widgetFactory) {

	$scope.widgets = [];
	
	init(); 
	
	function init() {
		$scope.widgets = widgetFactory.getWidgets();
	};
	
}])
.controller('HeaderController', ['$scope', '$location', function($scope,$location) {

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
        
}])
.controller('HelloJsonController', ['$scope', '$http', function($scope,$http) {
	
	  $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
	  
  }]);

/***
demoApp.controller('SimpleController1', function($scope, customerFactory) {			
	$scope.customers = [];
	
	// initialization routine.  Private init() function.  All init routines for factory calls in 1 place 
	// Ex: get initial dropdowns, etc 
	
	init(); 
	
	function init() {
		$scope.customers = customerFactory.getCustomers();
	};
	
	$scope.addCustomer = function() {
		$scope.customers.push( 
		{
			name : $scope.newCustomer.name,
			city : $scope.newCustomer.city
		});
	};

});

demoApp.controller('SimpleController2', function() {
	
	init(); 
	
	function init() {
		
	};
});
**/

