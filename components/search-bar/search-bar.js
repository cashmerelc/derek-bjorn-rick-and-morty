import { searchBar, cardContainer } from "../../index.js";

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  cardContainer.innerHTML = "";
  const searchString = event.target.elements;
  const url = `https://rickandmortyapi.com/api/character/?name=${searchString.query.value}`;
  fetchCharacters(url);
});
