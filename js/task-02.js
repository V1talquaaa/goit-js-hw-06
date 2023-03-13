const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listRef = document.querySelector('#ingredients');

let newArray =[];

ingredients.forEach((ingredient) => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');

  return newArray.push(newEl);

});

listRef.append(...newArray);





