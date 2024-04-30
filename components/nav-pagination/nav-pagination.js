import { pagination } from "../../index.js";

export let page = 1;
let maxPage = 1;

export function incrementPage() {
  page++;
}

export function decrementPage() {
  page--;
}

export function resetPage() {
  page = 1;
}

export function getPage() {
  return page;
}

export function setMaxPage(pages) {
  maxPage = pages;
}

export function getMaxPage() {
  return maxPage;
}

export function updateNavigation() {
  pagination.innerHTML = `${page} / ${maxPage}`;
}
