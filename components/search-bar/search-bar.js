import { searchBar, cardContainer } from "../../index.js";
import { fetchCharacters } from "../card/card.js";
let searchQuery = "";

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Search clickes");
  cardContainer.innerHTML = "";
  const searchString = event.target.elements;
  searchQuery = searchString.query.value;
  const url = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
  fetchCharacters(url);
});
