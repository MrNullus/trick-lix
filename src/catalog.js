import { capitalize } from "./Utils/utils.js";
import { booksStore } from "../api/books.js";
import { BooksBox } from "./Components/BookBox.js";

const booksContainer = document.querySelector('.books-container');
const categoryTitle = document.querySelector('.category-title');
const dropdownItems = document.querySelectorAll(".dropdown-item");

let storage = booksStore();

(function() {          
  booksContainer.innerHTML = BooksBox(storage);
})();

function handleClickDropdownItem(e) {
  let filteredStorage = [];
  let currentCategory = e.target.dataset.category;

  if (currentCategory === "all") {
    filteredStorage = storage.filter((item) => {
      return item.category !== "all";
    });
  } else {
    filteredStorage = storage.filter((item) => {
      return item.category === currentCategory;
    });
  }

  document.title = `Trick Lix || ${capitalize(currentCategory)}`;
  categoryTitle.innerText = `${capitalize(currentCategory)}`;

  booksContainer.innerHTML = BooksBox(filteredStorage);

}

dropdownItems.forEach(item => {
  item.addEventListener("click", handleClickDropdownItem);
});

// ▒▒▒▒▒▒▒▓
// ▒▒▒▒▒▒▒▓▓▓
// ▒▓▓▓▓▓▓░░░▓
// ▒▓░░░░▓░░░░▓
// ▓░░░░░░▓░▓░▓
// ▓░░░░░░▓░░░▓
// ▓░░▓░░░▓▓▓▓
// ▒▓░░░░▓▒▒▒▒▓
// ▒▒▓▓▓▓▒▒▒▒▒▓
// ▒▒▒▒▒▒▒▒▓▓▓▓
// ▒▒▒▒▒▓▓▓▒▒▒▒▓
// ▒▒▒▒▓▒▒▒▒▒▒▒▒▓
// ▒▒▒▓▒▒▒▒▒▒▒▒▒▓
// ▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓
// ▒▓▒▓▒▒▒▒▒▒▒▒▒▓
// ▒▓▒▓▓▓▓▓▓▓▓▓▓
// ▒▓▒▒▒▒▒▒▒▓
// ▒▒▓▒▒▒▒▒▓
