//Object literals


const mySym = Symbol("key1")
console.log(mySym);

const JsUser = {
    name: "Argus",
    age: 20,
    mySym: "mykey1",
    location: "New York",
    email: "argus@example.com",
    isLoggedIn: true,
    lastLoginDate: ["Monday", "Saturday"]
};

console.log((JsUser));
console.log(JsUser.name);
console.log(JsUser.lastLoginDate[1]);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(Object.keys(JsUser));

console.log("-----------------------");
console.log(JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof mySym);
console.log(typeof JsUser.mySym);

console.log("-----------------------");
const mySym2 = Symbol("key1")

const JsUser2 = {
    [mySym2]: "mykey1",
};

console.log(JsUser2[mySym2]);
console.log(typeof mySym2);
console.log(typeof [mySym2]);
console.log(typeof JsUser2[mySym2]);
console.log(Object.keys(JsUser2));
console.log(JsUser2);

//Value overwriting
JsUser.email = "argus@gmail.com";
console.log(JsUser.email);

//Freezing a value
// Object.freeze(JsUser);
// JsUser.email = "argus@yahoo.com";
// console.log(`${JsUser.email} ---------Value frozen`);

JsUser.greeting = function(){
    console.log("Hello JS user");
};

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());