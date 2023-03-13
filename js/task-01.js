const allCategories = document.querySelectorAll('.item');
console.log (`Number of categories: ${allCategories.length}`);


allCategories.forEach((element) => {
    console.log (`Category: ${element.firstElementChild.textContent}`);
    console.log (`Elements: ${element.lastElementChild.children.length}`);
});




















