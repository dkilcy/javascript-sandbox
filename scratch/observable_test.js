
require('./observable.js'); 

var Observer = function (data) {
    console.log(data);
}
 
// Here's where it gets used.
observable = new Observable();
observable.subscribe(Observer);
observable.publish('We published!');

