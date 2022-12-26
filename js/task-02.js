const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const AllIngredients = document.querySelector('ul');
console.log(AllIngredients);

const elements = ingredients.map((named) =>{
  const itemEl = document.createElement('li')
  itemEl.textContent = named;
  itemEl.classList.add('item');
  
  return itemEl;
});

AllIngredients.append(...elements)

