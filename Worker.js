
let as=new Date(2020,11,14,15,56,30)
console.log(as)
console.log(as);
console.log(as.getFullYear())
console.log(as.getMonth())
console.log(as.getDate())
console.log(as.getDay())
console.log(as.getHours())
console.log(as.getMinutes())

console.log(as.getSeconds())

console.log(as.toDateString())
console.log(as.toTimeString())
console.log(as.toLocaleDateString())    
console.log(as.toISOString())
console.log(as.toUTCString())
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
