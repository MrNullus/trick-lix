let categories;
let typeCategories = [];

fetch('./api/typeCategory')
.then(async (response) => {
    categories = await response.json();
    categories.map((item) => typeCategories.push(item));
});

export default { typeCategories };