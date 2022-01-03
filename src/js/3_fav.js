'use strict';

function renderAllItemsFav() {
  animeListFav.innerHTML = '';

  for (const eachAnimeFav of dataFav) {
    renderItemFav(eachAnimeFav);
  }
}

function renderItemFav(dataFav) {
  const li = document.createElement('li');
  li.classList.add('js-favItem');
  li.innerHTML = `<img class="" src="${dataFav.imageUrl}" alt="" placeholder=""><h3 class="card__title">${dataFav.title}</h3>`;
  animeListFav.appendChild(li);
}
