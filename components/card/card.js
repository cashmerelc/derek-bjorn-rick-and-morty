import { cardContainer, nextButton, prevButton } from "../../index.js";
import {
  setMaxPage,
  getPage,
  updateNavigation,
} from "../nav-pagination/nav-pagination.js";

export function createCharacterCard(ul, character) {
  const newCardForCharacter = document.createElement("card");

  const cardImage = character.image;

  const cardTitle = character.name;

  const cardInfoStatus = character.status;

  const cardInfoType = character.type;

  const cardInfoOccurrences = character.episode.length;

  newCardForCharacter.innerHTML = `
<ul class="card-container_new" data-js="card-container">
<li class="card">
  <div class="card__image-container">
    <img
      class="card__image"
      src=${cardImage}
      alt=${cardTitle}
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${cardTitle}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${cardInfoStatus}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${cardInfoType}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${cardInfoOccurrences}</dd>
    </dl>
  </div>
</li>
</ul>
`;
  ul.append(newCardForCharacter);
}

export async function fetchCharacters(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let currentPage = getPage();
    const maxPage = data.info.pages;
    setMaxPage(maxPage);
    if (currentPage === 1) {
      prevButton.setAttribute("disabled", "");
    }
    if (maxPage === 1) {
      nextButton.setAttribute("disabled", "");
    }
    const characters = data.results;
    characters.forEach((character) => {
      createCharacterCard(cardContainer, character);
    });
    updateNavigation();
  } catch (err) {
    console.log(err);
  }
}
