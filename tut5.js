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



const users = [
    {
        id: 1,
        email: "a@example.com"
    },
    {
        id: 2,
        email: "b@example.com"
    },
    {
        id: 3,
        email: "c@example.com"
    },
]

users.forEach(user => {
    console.log(user);
});

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id"));


const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "abc",
}

const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     "name": "John Doe",
//     "coursename": "JavaScript",
//     "price": "999",
// }

[
    colorThemes = [
      {
        "name": "Blue and White",
        "primaryColor": "#007BFF",
        "secondaryColor": "#FFFFFF"
      },
      {
        "name": "Black and Yellow",
        "primaryColor": "#000000",
        "secondaryColor": "#FFD700"
      },
      {
        "name": "Green and White",
        "primaryColor": "#28A745",
        "secondaryColor": "#FFFFFF"
      },
      {
        "name": "Navy and Coral",
        "primaryColor": "#001F3F",
        "secondaryColor": "#FF6F61"
      },
      {
        "name": "Purple and White",
        "primaryColor": "#6F42C1",
        "secondaryColor": "#FFFFFF"
      },
      {
        "name": "Teal and Orange",
        "primaryColor": "#20C997",
        "secondaryColor": "#FD7E14"
      },
      {
        "name": "Gray and Blue",
        "primaryColor": "#6C757D",
        "secondaryColor": "#17A2B8"
      },
    ],
]

//console.log(colorThemes);

console.log(colorThemes[1]);
console.log(colorThemes[1].name);