import {
    menu
} from "../app.js";
import { BookHeader } from "./BookHeader.js";
import { BookInfo } from "./BookInfo.js";
import { capitalize } from "../Utils/utils.js";


// get parent element
const sectionCenter = document.querySelector(".books-container");
const btnContainer = document.querySelector(".dropdown-content");


export function MenuItems(menuItems) {
  const categoryTitle = document.querySelector(".category-title");
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter( (menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      document.title = `Trick Lix || ${capitalize(category)}`;
      categoryTitle.innerText = capitalize(category);

      if (category === "all") {
        MenuItems(menu);
      } else {
        MenuItems(menuCategory);
      }
    });
  });


  let displayMenu = menuItems.map( (book) => {
    // console.log(item);

    return `
      <div class="book-box">
        ${BookHeader(book)}

        ${BookInfo(book)}
      </div>
    `;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}