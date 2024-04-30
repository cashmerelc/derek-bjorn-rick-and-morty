import { createCharacterCard, fetchCharacters } from "../card/card.js";
import { navigation, prevButton, nextButton, pagination } from "../../index.js";

export function nextButtonClick(url, page, maxPage, cardContainer) {
  console.log(url);
  // Check to see if the new page count is the max page number. If so, disable the next button
  if (page === maxPage) {
    nextButton.setAttribute("disabled", "");
  }
  // The prevButton starts out disabled, so once we move to the next page we need to enable the prevButton
  if (page === 2) {
    prevButton.disabled = false;
  }
  cardContainer.innerHTML = "";
  pagination.textContent = `${page} / ${maxPage}`;
  url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  console.log(url);
  fetchCharacters(url);
}

export function prevButtonClick(url, page, maxPage, cardContainer) {
  // Disable the prevButton when we reach the first page (after we have already left the first page)
  if (page === 1) {
    prevButton.setAttribute("disabled", "");
  }
  // When we reach the maxpage, we disable the next button. If we go to the previous page, we need to enable it again
  if (page === maxPage - 1) {
    nextButton.disabled = false;
  }
  cardContainer.innerHTML = "";
  pagination.textContent = `${page} / ${maxPage}`;
  url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  fetchCharacters(url);
}
