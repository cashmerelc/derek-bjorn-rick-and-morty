import {
  createCharacterCard,
  fetchCharacters,
  maxPage,
} from "./components/card/card.js";
import {
  nextButtonClick,
  prevButtonClick,
} from "./components/nav-pagination/nav-pagination.js";

console.clear();
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
// let maxPage = 1;
let page = 1;
let searchQuery = "";
let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
prevButton.setAttribute("disabled", "");

fetchCharacters(page, url);
// pagination.textContent = `${page} / ${maxPage}`;

nextButton.addEventListener("click", () => {
  // Increment the page counter

  page++;
  // console.log(page);
  nextButtonClick(url, page, maxPage, cardContainer);
});

prevButton.addEventListener("click", () => {
  // Decrement the page counter
  page--;
  prevButtonClick(url, page, maxPage, cardContainer);
});
