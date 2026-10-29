class Animal{
      eat(){
        console.log("Animal is eating")
    }
}
class Dog extends Animal{
      eat(){
        console.log("Dog is eating")
    }
}
 
class Cat extends Animal{
      eat(){
        console.log("Cat is eating")
    }
}
 
let s=[new Animal(),new Dog(),new Cat()]
s.forEach((x)=>x.eat())

let df={
    name:"Karthik",
    id:24
}
console.log(df.id)
print(df)
console.log(df.id)
function print(df){
    df.id=55;
    console.log(df.id)
}