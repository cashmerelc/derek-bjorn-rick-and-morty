import { createCharacterCard } from "./components/card/card.js";

console.clear();
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage = 1;
export let page = 1;
let searchQuery = "";
export let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
prevButton.setAttribute("disabled", "");

export async function fetchCharacters() {
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    maxPage = data.info.pages;
    console.log(data);
    const characters = data.results;
    characters.forEach((character) => {
      createCharacterCard(cardContainer, character);
    });
  } catch (err) {
    console.log(err);
  }
}

fetchCharacters();
