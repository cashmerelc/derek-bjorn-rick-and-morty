import { fetchCharacters } from "../card/card.js";
import { cardContainer, prevButton, nextButton } from "../../index.js";
import {
  incrementPage,
  decrementPage,
  getPage,
  setMaxPage,
  getMaxPage,
  updateNavigation,
} from "../nav-pagination/nav-pagination.js";

nextButton.addEventListener("click", () => {
  // Increment the page counter
  incrementPage();
  let page = getPage();
  let maxPage = getMaxPage();

  // Check to see if the new page count is the max page number. If so, disable the next button
  if (page === maxPage) {
    nextButton.setAttribute("disabled", "");
  }
  // The prevButton starts out disabled, so once we move to the next page we need to enable the prevButton
  if (page === 2) {
    prevButton.disabled = false;
  }
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  console.log(url);
  fetchCharacters(url);
});

prevButton.addEventListener("click", () => {
  // Decrement the page counter
  decrementPage();
  let page = getPage();
  let maxPage = getMaxPage();
  // Disable the prevButton when we reach the first page (after we have already left the first page)
  if (page === 1) {
    prevButton.setAttribute("disabled", "");
  }
  // When we reach the maxpage, we disable the next button. If we go to the previous page, we need to enable it again
  if (page === maxPage - 1) {
    nextButton.disabled = false;
  }
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  fetchCharacters(url);
});
