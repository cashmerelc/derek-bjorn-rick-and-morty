import { createCharacterCard } from "./components/card/card.js";

console.clear();
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";
let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
prevButton.setAttribute("disabled", "");

async function fetchCharacters() {
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    maxPage = data.info.pages;
    console.log(data);
    console.log(maxPage);
    const characters = data.results;
    characters.forEach((character) => {
      createCharacterCard(cardContainer, character);
    });
  } catch (err) {
    console.log(err);
  }
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  // Increment the page counter
  page++;
  // Check to see if the new page count is the max page number. If so, disable the next button
  if (page === maxPage) {
    nextButton.setAttribute("disabled", "");
  }
  // The prevButton starts out disabled, so once we move to the next page we need to enable the prevButton
  if (page === 2) {
    prevButton.disabled = false;
  }
  url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  fetchCharacters();
});

prevButton.addEventListener("click", () => {
  // Decrement the page counter
  page--;
  // Disable the prevButton when we reach the first page (after we have already left the first page)
  if (page === 1) {
    prevButton.setAttribute("disabled", "");
  }
  // When we reach the maxpage, we disable the next button. If we go to the previous page, we need to enable it again
  if (page === maxPage - 1) {
    nextButton.disabled = false;
  }
  url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  fetchCharacters();
});
