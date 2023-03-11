const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categoria: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('li');
    console.log(`category: ${title} \nElements: ${items.length}`);
});
