import { fetchCharacters } from "../card/card.js";
import { cardContainer, prevButton, nextButton } from "../../index.js";
import {
  incrementPage,
  decrementPage,
  getPage,
  getMaxPage,
} from "../nav-pagination/nav-pagination.js";
import { searchAttribute } from "../search-bar/search-bar.js";

nextButton.addEventListener("click", () => {
  incrementPage();
  let page = getPage();
  let maxPage = getMaxPage();

  if (page === maxPage) {
    nextButton.setAttribute("disabled", "");
  }

  if (page === 2) {
    prevButton.disabled = false;
  }
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character/?page=${page}${searchAttribute}`;
  console.log(url);
  fetchCharacters(url);
});

prevButton.addEventListener("click", () => {
  decrementPage();
  let page = getPage();
  let maxPage = getMaxPage();

  if (page === 1) {
    prevButton.setAttribute("disabled", "");
  }

  if (page === maxPage - 1) {
    nextButton.disabled = false;
  }
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character/?page=${page}${searchAttribute}`;
  fetchCharacters(url);
});
