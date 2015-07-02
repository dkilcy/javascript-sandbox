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

function testStringBuilder() { 

    // create a StringBuilder
    var sb = new StringBuilder();
    
    startTime = new Date().getTime();
    for(i=0; i < 5000000; i++) {
        // append some text
        sb.append("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ");
        sb.append("sed diem nonummy nibh euismod tincidunt ut lacreet dolore ");
        sb.append("magna aliguam erat volutpat.");
    }
    stopTime = new Date().getTime();
    console.log( stopTime + " " + startTime + " " + (stopTime - startTime) );
}

testStringBuilder();

function testString() {
    var s = "";
    startTime = new Date().getTime();

    for(i=0; i < 5000000; i++) {
        s += "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ";
        s += "sed diem nonummy nibh euismod tincidunt ut lacreet dolore ";
        s += "magna aliguam erat volutpat.";
    }
    stopTime = new Date().getTime();
    console.log( stopTime + " " + startTime + " " + (stopTime - startTime) );
}

testString();

// get the full string value
//var s = sb.toString();
//console.log(s);

