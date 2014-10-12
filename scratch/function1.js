// http://msdn.microsoft.com/en-us/magazine/gg476048.aspx 
// Function
//
function Hello(msg) {
    console.log(msg);
};

Hello("World"); // World

// Function Variable
var Hello = function(msg) {
    console.log(msg); 
};

Hello("World"); // World

var i = 0;
// Function Variable - Self Executing - One Time
// var Hello = function(msg) {
// wrapped in optional brackets 
var Hello = (function(msg) {
   console.log(msg);
   i++;
   return i;
})("World");    // World
//}("World");

// At this point Hello is no longer a function

console.log(Hello); // 1
console.log(Hello); // 1
//console.log(Hello("World")); // TypeError: number is not a function
console.log(i); // 1

// Anonymous Function - Self Executing
// The only difference between a regular function and an anonymous function is in the name.
(function() { 
   console.log("Hello World"); // Hello World
})();


// Multiple return methods
var Widget = function() { 
    return {
        method1: function() { return "foo"; },
        method2: function() { return 12; },
        result : 42   
    };
};

var widget = Widget().method1;
console.log(widget); // [Function]

var widget = Widget().method1();
console.log(widget); // foo

