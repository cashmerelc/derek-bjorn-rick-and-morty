import { createCharacterCard } from "../card/card.js";
import { fetchCharacters } from "../../index.js";
import {
  navigation,
  prevButton,
  nextButton,
  pagination,
  page,
  maxPage,
  url,
} from "../../index.js";

console.log(nextButton);
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
  cardContainer.innerHTML = "";
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
  cardContainer.innerHTML = "";
  url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  fetchCharacters();
});
