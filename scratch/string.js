
// create a StringBuilder

var s;
var p = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ";

var start = new Date();
var stop = new Date();
var startTime = start.getTime();
for(i=0; i < 20000000; i++) {
    s += "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ";
    s += "sed diem nonummy nibh euismod tincidunt ut lacreet dolore ";
    s += "magna aliguam erat volutpat.";
}
var stopTime = stop.getTime();
console.log( stopTime + " " + startTime + " " + (stopTime - startTime) );
