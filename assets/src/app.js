import  { MenuItems } from "./Components/MenuItems.js";
import  { MenuButtons } from "./Components/MenuButtons.js";
import { booksStore} from "./Books/Books.js";

// get books from variable booksStore
export const menu = booksStore;

// display all items when page loads
window.addEventListener("DOMContentLoaded", () => {
  MenuItems(menu);
  
  MenuButtons();
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
