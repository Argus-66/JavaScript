function addLanguage(langName) {
  const li = document.createElement("li");

  li.innerHTML = `${langName}`;

  document.querySelector(".language").appendChild(li);

}


addLanguage("python");
addLanguage("Node");


function addOptiLanguage(langName) 
{
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(langName));

  document.querySelector(".language").appendChild(li);
}


addOptiLanguage("golang");



//Edit   Replacing Python with Mongo
const secondLang = document.querySelector("li:nth-child(2)");
console.log(secondLang);

//secondLang.innerHTML = "Mojo"
const newli = document.createElement("li");
newli.textContent = "Mongo";
secondLang.replaceWith(newli);

//edit    adding TypeScript as first language
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

//remove    removing golang (Last language in the list)
const lastLang = document.querySelector("li:last-child");
lastLang.remove();


