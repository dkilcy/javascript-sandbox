'use strict';

/**********************************************************************************
 * AngularJS Filters
 * @dkilcy
 **********************************************************************************/
angular.module('demoApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
