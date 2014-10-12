// Object model
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

var counter = 1; 

function Widget(name,description) {

    this.name = name || "";
    this.description = description || "";
    if( name ) {
        this.counter = counter++;
    }
}

function LargeWidget(name,description,size) {
    //this.base = Widget;
    //this.base(name, description);
    Widget.call(this, name, description); 
    this.size = size || 0;
}
//LargeWidget.prototype = new Widget;

var widget1 = new Widget("test1","test1d");
var widget2 = new LargeWidget("test2","test2d",40);

widget2.machine = "foo";
widget1.slot = "bar";

console.log(widget1);
console.log(widget2);

