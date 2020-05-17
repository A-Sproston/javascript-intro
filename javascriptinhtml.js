function sayHello(){
    console.log("Hello");
}

sayHello();


const sayBye = function(){
    console.log("Bye");
}

sayBye();



function sing(song){
    console.log(song);
}

sing("LAAA DEE DA");

sing("BACK STREETS BACK");



function multiply(a, b){
    let c = a * b;
    return c;
}

console.log(multiply(4, 5));

function multiply2(a, b) {
    return a * b;
}

console.log(multiply2(4, 5));

function multiply3(a, b) {
    if (a > 10 || b > 10){
        return "that is too hard";
    } else {
        return a * b;
    }
}

console.log(multiply3(4, 5));