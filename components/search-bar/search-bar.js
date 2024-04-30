import { cardContainer } from "../../index.js";
import { fetchCharacters } from "../card/card.js";
import { resetPage } from "../nav-pagination/nav-pagination.js";
export let searchQuery = "";
export let searchAttribute = "";
const searchBar = document.querySelector('[data-js="search-bar"]');

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Search clickes");
  cardContainer.innerHTML = "";
  const searchString = event.target.elements;
  searchQuery = searchString.query.value;
  searchAttribute = `&name=${searchQuery}`;
  resetPage();
  const url = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
  fetchCharacters(url);
});
