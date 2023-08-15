import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    const { info, results } = await response.json();
    maxPage = info.pages;
    pagination.textContent = `${page} / ${info.pages}`;

    results.forEach(createCharacterCard);
  } catch (error) {
    console.error("An error occurred while fetching characters:", error);
  }
}

prevButton.addEventListener("click", () => {
  page > 1 && page--;
  fetchCharacters();
});
nextButton.addEventListener("click", () => {
  page < maxPage && page++;
  fetchCharacters();
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Search form submitted");
  searchQuery = event.target.elements.query.value;
  console.log("Search query:", searchQuery);
  fetchCharacters();
});

fetchCharacters();
