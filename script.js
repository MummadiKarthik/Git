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