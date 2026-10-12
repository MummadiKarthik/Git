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