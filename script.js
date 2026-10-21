<<<<<<< HEAD
// first class function

function greet(name) {  
    console.log("Hello " + name);
}

function bro(call){
    call("karthik");
}
bro(greet);

function bro2(){
    return function(name){
        console.log("Hello " + name);
    }
}
let d=bro2();
d("karthik");

let sa=(a,b)=>a+b
console.log(sa(24,35))

let daf=[function(){
    console.log("function 1")
},function(){
    console.log("function 2")
}]
console.log(daf[0]())
=======
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.getInfo = function() {
    return `Name: ${this.name}, Species: ${this.species}`;
}   

function Dog(name, breed) {
    Animal.call(this, name, 'Dog');
    this.breed = breed;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

Dog.prototype.makeSound=function(){
    console.log("Woof! Woof!");
}
let s=new Animal("Buddy","Dog");
console.log(s.getInfo());

let a=new Dog("Smmofk","Labrador");
console.log(a.getInfo());
a.makeSound();
>>>>>>> feature
