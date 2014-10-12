'use strict';

/************************************************************************************
 * AngularJS Services
 * Services (and Factories) are singletons. 
 * They are instantiated on demand.
 * @author dkilcy
 ***********************************************************************************/

var demoApp = angular.module('demoApp'); // retrieve existing module declared in app.js

angular.module('demoApp.services', []).value('version', '0.4');

/**
 * This class performs basic authentication of a user
 * 
 * The contract between the service (authService) and the controller (authController)
 * is called a Promise.   
 * Reference:
 * http://andyshora.com/promises-angularjs-explained-as-cartoon.html
 */
demoApp.factory( "authService", ['$http','$q', '$window', function($http,$q,$window) {

	var credentials = {};	
	var authenticated = false; 
	
	var login = function(user) {    
    	
    	credentials = user;
    	console.log('info', credentials.username );
    	
    	var deferred = $q.defer();
    	$http.post('/authenticate', credentials).success(function(data) {
    		
    		deferred.resolve(data);
			authenticated = true;
			$window.sessionStorage.token = data.token;
			
			console.log('info', "authenticated as user: " + credentials.username + " token=" + data.token );
    	}).error(function(reason) {
    			// something went wrong
    			//if( canHandle(reason)) { // make return something else }
    			return deferred.reject(reason);        			
   
    	})
    	return deferred.promise;
	}
	
    return {    
        login: login, 
        
        logout: function() {
        	console.log('info', 'logging user out: ' + credentials.username );
        	delete $window.sessionStorage.token;
        	authenticated = false;            
        },
        authenticated: function() {
        	return authenticated;
        } 
    };
    
   
}]);

demoApp.factory('restService', [ '$http', '$q', function($http,$q) {
	
	var greetings = function() {		
		var deferred = $q.defer();
        $http.get('http://rest-service.guides.spring.io/greeting').success(function(data) {
        console.log('info',"data=" + data.id + " " + data.content);        
		deferred.resolve(data);
        })
        .error(function(reason) {
			// something went wrong
			//if( canHandle(reason)) { // make return something else }
			return deferred.reject(reason);       
		})
        return deferred.promise;
	}
	
	return {
		greetings: greetings		
	};
	
}]);

/**/

/**********************************************************************************
 * Simple factories for demo and experimentation
 * http://www.youtube.com/watch?v=i9MHigUZKEM
 **********************************************************************************/

demoApp.factory('widgetFactory', [ function() {
	var widgets = [ { id:1, name:"Alpha", description:"Test1 Widget" }, 
			 	      { id:2, name:"Bravo", description:"Test2 Widget" },
				      { id:3, name:"Charlie", description:"Test3 Widget" }
				    ]; 
	
	var factory = {};
	factory.getWidgets = function() {
		 // AJAX call 
		return widgets;
	};
	factory.addWidget = function( widget ) { 
		widgets.push(widget);
	};
	factory.deleteWidget = function( widget ) {
		var index = widgets.indexOf(widget);
		widgets.splice(widgets.indexOf(widget),1);   
	};
	
	return factory;
}]);
