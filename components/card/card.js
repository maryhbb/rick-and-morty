const cardContainer = document.querySelector("ul");

export function createCharacterCard({ image, name, status, type, episode }) {
  const liElement = document.createElement("li");
  liElement.classList.add("card");
  const template = `
    <div class="card__image-container">
      <img class="card__image" src="${image}" alt="${name}">
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${episode.length}</dd>
      </dl>
    </div>
  `;
  liElement.innerHTML = template;
  cardContainer.append(liElement);
}
