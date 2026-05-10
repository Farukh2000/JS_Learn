// a=5
// b='h'
// c='hello'
// d=1.3
// e=1
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))


// Primitive- Number, string, null, undefined, bigInt, boolean, symbol
// Non primitive -Array, object, function
const id=Symbol('124')
const Aid=Symbol('124')
console.log(typeof(id))
console.log(id==Aid)


// function

const add=function(a,b){
    return a+b
}

console.log(add(4,5));

// arrow function
const mul=(c,d)=> c*d;

console.log(mul(5,7));
