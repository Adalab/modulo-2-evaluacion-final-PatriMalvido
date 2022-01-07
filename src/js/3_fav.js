'use strict';

function handleBoton(event){
  console.log(event.currentTarget);
  console.log(event.currentTarget.dataset.title);
}



function renderAllItemsFav() {
  animeListFav.innerHTML = '';

  for (const eachAnimeFav of dataFav) {
    renderItemFav(eachAnimeFav);
  }
  const botones = document.querySelectorAll('.js-button_titulo_fav');

  for (const eachboton of botones) {
    eachboton.addEventListener('click', handleBoton);
  }
}

function renderItemFav(dataFav) {
  const li = document.createElement('li');
  li.classList.add('js-favItem');
  li.innerHTML = `<img class="js-image-fav" src="${dataFav.imageUrl}" alt="" placeholder=""><h3 class="card__title">${dataFav.title}</h3><input type="button" value='titulo' data-title=" ${dataFav.title}" class='js-button_titulo_fav fav__section-reset'>`;

  animeListFav.appendChild(li);
}
