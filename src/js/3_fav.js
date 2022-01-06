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
  li.innerHTML = `<img class="js-image-fav" src="${dataFav.imageUrl}" alt="" placeholder=""><h3 class="card__title">${dataFav.title}</h3><input type="button" value='x' class="reset-icon-fav js-reset_Icon_Fav">`;
  animeListFav.appendChild(li);
}



