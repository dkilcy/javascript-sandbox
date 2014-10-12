// Module pattern
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
//
//
// declare a anonymous function that is global and execute it immediately
var testModule = (function() {
    var module = {};

    // private variables
    var prop1 = "";

    // private methods
    function method1() { }

    module.prop2 = "this is the testModule.prop2 value";
    module.method2 = function() {
        console.log("method2() called" ); // testModule.method2 
    }

    return module;
}()); 
//maintains private internal state using the closure of the anonymous function
//

var testModule2 = testModule;

//console.log(testModule.prop1);  // undefined
console.log(testModule.prop2);

//testModule.method1(); // TypeError: Object #<Object> has no method 'method1'
testModule.method2();

testModule2.prop2 = "foo";
console.log(testModule2.prop2);

console.log(testModule.prop2);

