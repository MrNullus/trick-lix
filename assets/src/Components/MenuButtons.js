import {
    menu
} from "../app.js";
import {
    MenuItems
} from "./MenuItems.js";


export function MenuButtons() {
    const btnContainer = document.querySelector(".dropdown-content");

    const categories = menu.reduce(function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    const categoryBtns = categories.map(function (category) {
        return `
        <a 
          data-id="${category}"
          data-category="${category}" 
          class="filter-btn dropdown-item" 
          href="#"
        >
          ${category}
        </a>
      `;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    // console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });

            if (category === "all") {
                MenuItems(menu);
            } else {
                MenuItems(menuCategory);
            }
        });
    });
}