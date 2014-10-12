//https://meteatamel.wordpress.com/2012/02/29/javascript-class-and-visibility-control/
// Defining a function variable.
 
// Constructor
Widget = function(arg1,arg2,arg3) {
   
   //private variables
   var param1 = arg1;
   var param2 = arg2;
   var param3 = arg3;

   // private method
   var getParam1 = function() { 
       return param1;
   };

   // public variable
   this.param4 = "p4";

   // Privileged method - exposes private variables and methods publically
   this.getCombined1 = function() {
       return getParam1() + "," + param2;
   };

   Widget.counter++;
};

Widget.counter = 0; // public static property

// Public method
Widget.prototype.getCombined2 = function() {
    //return this.param1 + "->" + Widget.counter; // undefined->0
    return this.param4 + "->" + Widget.counter;  // p4->2
};

var widget1 = new Widget("foo","bar","baz");
var widget2 = new Widget("a","b","c"); 

console.log(widget1);
console.log(widget2);

console.log(widget1.getCombined1());
console.log(widget1.getCombined2());

