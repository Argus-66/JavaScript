// Object Singletons/Constructors

const tinderUser = new Object();
// const tinderUser = {}; can use this as well

tinderUser.id = "123abc"
tinderUser.name = "Argus";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

const regularUser = {
    email: "argus@example.com",
    fullname: {
        userfullname: {
            firstname: "Argus",
            lastname: "-66"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b", 6: "c" };

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1,...obj2 };
console.log(obj5);