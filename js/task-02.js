const ingredients =  [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  ul.appendChild(li);
 
}