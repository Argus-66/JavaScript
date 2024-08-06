title.style.backgroundColor = 'green';
title.style.color = 'lightblue';

console.log(title.innerHTML);
console.log(title.style.backgroundColor);
console.log(title.innerText);
console.log(title.textContent);

console.log(document.querySelector('h2'));
console.log(document.querySelector('#title'));
console.log(document.querySelector('.heading'));
console.log(document.querySelector('input[type = "password"]'));

const myul = document.querySelector('ul');
const turnRed = myul.querySelectorAll('li')
turnRed.forEach(li => {
    li.style.color = 'red';
});
console.log(myul.querySelectorAll('li'));

turnRed.forEach(li => {
    li.style.backgroundColor = 'yellow';
});

turnRed.forEach(li => {
    li.style.listStyle = 'none';
});

