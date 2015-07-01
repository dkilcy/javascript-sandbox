// Initializes a new instance of the StringBuilder class
// and appends the given value if supplied
function StringBuilder(value)
{
    this.strings = new Array("");
    this.append(value);
}

// Appends the given value to the end of this instance.
StringBuilder.prototype.append = function (value)
{
    if (value)
    {
        this.strings.push(value);
    }
}

// Clears the string buffer
StringBuilder.prototype.clear = function ()
{
    this.strings.length = 1;
}

// Converts this instance to a String.
StringBuilder.prototype.toString = function ()
{
    return this.strings.join("");
}

// create a StringBuilder
var sb = new StringBuilder();

var start = new Date();
var stop = new Date();
var startTime = start.getTime();
for(i=0; i < 20000000; i++) {
    // append some text
    sb.append("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ");
    sb.append("sed diem nonummy nibh euismod tincidunt ut lacreet dolore ");
    sb.append("magna aliguam erat volutpat.");
}
var stopTime = stop.getTime();
console.log( stopTime + " " + startTime + " " + (stopTime - startTime) );


// get the full string value
//var s = sb.toString();
//console.log(s);

