 //first class function

 let ad=(a,b)=>a+b;
 console.log(ad(23,24))
 
 function kar(a){
   return function(b){
    return a+b;
   }
 }
 let g=kar(24);
 console.log(g(33))

 let as=[function(){
    console.log("function 1")
 },function(){
    console.log("function 2")

 }]
 as[0]()
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
 