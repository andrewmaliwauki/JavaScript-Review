//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


/*Now create a person function that creates an object and returns it (not in constructor form)
that has the following parameters. name, age, height, gender*/

var personDude = function() {
  var obj = {};
  obj.name = name;
  obj.age = age;
  obj.height = height;
  obj.gender = gender;
  return obj;
}


//Create a animal array and a person array.

var animal = [];
var person = [];


//Create two instances of Animal and push those into your animal array

animal[0] = new Animal('Rhino', 'Rumby', 4, 'grey', ['lettuce', 'potatoes']);
animal[1] = new Animal('Monkey', 'Diddy', 2, 'brown', ['carrots', 'apples']);


//Create two instances of person and push those into your person array.

person[0] =


/*Now we want every instance of Animal to have a eat method.
This method will choose a random item in that instances food array,
then alert "(name) ' ate ' (whichever food was chosen)".*/

Animal.prototype.eat = function() {
  var choose = Math.floor(Math.random * (this.food.length - 1));
  alert(this.name + ' ate ' + this.food[choose]);
}


//At this point, if we wanted to add something to every istance of person could we?

Yes, because with prototypes it applies to all instances of the constructor function




  //1) What happens when you use the 'new' keyword to call a Constructor function?

  It creates a new instance of that function with new assigned property values

  //2) What's a good way to describe the keyword 'this'

  It refers to the context to what function it's assigned to, whether it's implicitly or explicity bound

  //3) Can a normal function which creates an object and then returns that object use the prototype?

  Yes

  //4) What happens if you forget to use 'new' when calling a constructor?

  It will apply that object to the window or global scope
