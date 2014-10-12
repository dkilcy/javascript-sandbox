// Module pattern
// http://yuiblog.com/blog/2007/06/12/module-pattern/
testModule = function() {

    // private variables
    var prop1 = "";

    // private methods
    var method1 = function() { }

    return {
        prop2: "this is the testModule.prop2 value",
        method2: function() {
            console.log("method2() called" ); // testModule.method2 
        }
    };

}();  // the parens cause the anonymous function to execute and return

//console.log(testModule.prop1);  // undefined
console.log(testModule.prop2);

//testModule.method1(); // TypeError: Object #<Object> has no method 'method1'
testModule.method2();

