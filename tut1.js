// Data Types in JavaScript
/*
Primitive Data types

7 Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt(big integer values)
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n





/*
Non Primitive Data types(Reference Types)

Array, Object, Function, Date, RegExp, Map, Set, WeakMap, WeakSet

*/

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "jeff",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);