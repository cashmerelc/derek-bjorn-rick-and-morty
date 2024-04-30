import {
  createCharacterCard,
  fetchCharacters,
} from "./components/card/card.js";

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
let searchQuery = "";
let url = `https://rickandmortyapi.com/api/character/`;
prevButton.setAttribute("disabled", "");

fetchCharacters(url);
