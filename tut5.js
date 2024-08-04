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
