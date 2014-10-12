//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      //console.log("calling setName() with " + newName);
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet1 = new createPet("Vivie");
var pet2 = new createPet("Foo"); 

console.log(pet1.getName());                  // Vivie

pet1.setName("Oliver");
pet1.setSex("male");
console.log(pet1.getSex());                   // male
console.log(pet1.getName());                  // Oliver

console.log(pet2.getSex());                   // undefined
console.log(pet2.getName());                  // Foo


