'use strict';

//Funcion para recoger datos de la APi, se ejecuta cuando se carga la página//
function fetchItems() {
  fetch(`https://api.jikan.moe/v3/search/anime?q=${searchInputTitle.value}`)
    .then((response) => response.json())
    .then((dataFromApi) => {
      data = dataFromApi.results;
      console.log(data);
      renderAllItems();
    });
}

function handleAnimeTitle(event) {
  event.preventDefault();
  fetchItems();
}

buttonSearch.addEventListener('click', handleAnimeTitle);
