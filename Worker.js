 
//new york
let sa=[1,45,235,6];
let a=sa.sort((a, b) => b - a);
console.log(sa)
// we have added a function to add two numbers
let s=(a,b)=>a+b;
console.log(s(24,34))


//hello bro

//decorator function

function decorator(fn){

    return function(...args){
        console.lof("Beifre calling the function")
        let d=fn(...args)
        console.log("After calling the function")
        return d;   
    }
}
let ss=decorator((a,b)=>a+b)
console.log(s(24,34))

//genarotor

function * generator(){
  
    let i=0;
    while(true){   
        yield i;
        i++;
    } 
        
}
let ssa=generator();
console.log(ssa.next()) 
console.log(ssa.next())
console.log(ssa.next())
console.log(ssa.next())
console.log(ssa.next())

//prototypal inheritance

function Animal(name){
    this.name=name;
}
Animal.prototype.sound=function(){
    console.log("Animal is making sound")
}

function Dog(name,id){
    Animal.call(this, name)
    this.id=id;
}
Dog.prototype=Object.create(Animal.prototype)

Dog.prototype.bark=function(){
    console.log(this.name+" makes sound")
}
Dog.prototype.constructor=Dog;
let fr=new Animal("Dragon")
fr.sound();
let sdf=new Dog("Spooki",23)
sdf.bark()