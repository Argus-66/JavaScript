// Iterations 

    // For loop
    // While loop
    // Do-while loop
    // forEach loop
    // map

// For loop
console.log("For loop");
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("------------------------------")

// While loop
console.log("While loop");
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

console.log("------------------------------")

// Do-while loop

console.log("Do-while loop");
let k = 0;
do {
    console.log(arr[k]);
    k++;
} while (k < arr.length);

console.log("------------------------------")


//forOf loop
console.log("For of loop");
for (let element of arr) {
    console.log(element);
}

console.log("------------------------------")

// forEach loop
console.log("forEach loop");
arr.forEach(function(element) {
    console.log(element);
});

console.log("------------------------------")

// map
console.log("Map");
let newArr = arr.map(function(element) {
    return element * 2;
});

console.log(newArr);

console.log("------------------------------")

const map = new Map()
map.set('IN', 'India')
    .set('US', 'USA')
    .set('UK', 'United Kingdom')
    .set('CA', 'Canada')
    .set('IN', 'India')

console.log(map);

console.log("------------------------------")

for (const key of map){
    console.log(key);
}
console.log("------------------------------")

for (const [key, value] of map){
    console.log(`${key}: ${value}`);
}
console.log("------------------------------")