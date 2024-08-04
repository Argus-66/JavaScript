// Iterations 

    // For loop
    // While loop
    // Do-while loop
    // forEach loop
    // map

// For loop
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("------------------------------")

// While loop

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

console.log("------------------------------")

// Do-while loop

let k = 0;
do {
    console.log(arr[k]);
    k++;
} while (k < arr.length);

console.log("------------------------------")

// forEach loop

arr.forEach(function(element) {
    console.log(element);
});

console.log("------------------------------")

// map

let newArr = arr.map(function(element) {
    return element * 2;
});

console.log(newArr);

console.log("------------------------------")

// filter

let filteredArr = arr.filter(function(element) {
    return element % 2 === 0;
});

console.log(filteredArr);

console.log("------------------------------")