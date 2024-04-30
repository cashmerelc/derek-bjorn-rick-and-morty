import { cardContainer, pagination } from "../../index.js";
// import { disableNextButton } from "../nav-button/nav-button.js";
import {
  incrementPage,
  getPage,
  setMaxPage,
  getMaxPage,
  updateNavigation,
} from "../nav-pagination/nav-pagination.js";

export function createCharacterCard(ul, character) {
  //const card = document.querySelector(cardContainer)

  const newCardForCharacter = document.createElement("card");

  const cardImage = character.image;
  // console.log(cardImage);
  const cardTitle = character.name;
  // console.log(cardTitle);
  const cardInfoStatus = character.status;
  // console.log(cardInfoStatus);
  const cardInfoType = character.type;
  // console.log(cardInfoType);
  const cardInfoOccurrences = character.episode.length;
  // console.log(cardInfoOccurrences);

  newCardForCharacter.innerHTML = `
<ul class="card-container" data-js="card-container">
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
    const maxPage = data.info.pages;
    setMaxPage(maxPage);
    if (maxPage === 1) {
      // disableNextButton();
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
