'use strict';
//variables globales-----------------------------------
console.log('>> Ready :)');
const animeListFav = document.querySelector('.js-anime_list_fav');
const animeList = document.querySelector('.js-anime_list');
const searchInputTitle = document.querySelector('.js-search_input_title');
const buttonSearch = document.querySelector('.js-button_search');
const buttonReset = document.querySelector('.js-button_reset');
const buttonResetFav = document.querySelector('.js-button_reset_fav');
const defaultImage =
  'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

let data = [];
let dataFav = [];

//Funcion para recoger datos de la APi
function fetchItems() {
  fetch(`https://api.jikan.moe/v3/search/anime?q=${searchInputTitle.value}`)
    .then((response) => response.json())
    .then((dataFromApi) => {
      data = dataFromApi.results;
      console.log(defaultImage);
      renderAllItems();
    });
}



function renderAllItems() {
  animeList.innerHTML = '';
  for (const eachAnime of data) {
    renderItem(eachAnime);
  }
  const animeArticles = document.querySelectorAll('.js-article');

  for (const eachAnimeArticle of animeArticles) {
    eachAnimeArticle.addEventListener('click', handleAnimeFav);
  }
}


function handleAnimeFav(event) {
  const existsFav = dataFav.find(
    (fav) => fav.title === event.currentTarget.dataset.title
  );

  if (existsFav === undefined) {
    dataFav.push(event.currentTarget.dataset);

    setInLocalStorage();
    renderAllItemsFav();
  } else {
    alert('La serie de anime ya está en la lista de favoritos');
  }
}

function renderAllItemsFav() {
  animeListFav.innerHTML = '';

  for (const eachAnimeFav of dataFav) {
    renderItemFav(eachAnimeFav);
  }
}

function renderItemFav(dataFav) {
  const li = document.createElement('li');
  li.classList.add('favItem');
  li.innerHTML = `<img class="" src="${dataFav.imageUrl}" alt="" placeholder=""><h3 class="card__title">${dataFav.title}</h3>`;
  animeListFav.appendChild(li);
}

// Funcion para mostrar la lista de series de anime
function renderItem(data) {
  let imageUrl = data.image_url;

  if (data.image_url === null) {
    imageUrl = defaultImage;
  }

  const article = document.createElement('article');
  article.classList.add('anime');
  article.classList.add('js-article');
  article.dataset.title = data.title;
  article.dataset.imageUrl = imageUrl;
  article.innerHTML = `<img class="" src="${imageUrl}" alt="" placeholder="">
  <h3 class="card__title">${data.title}</h3>`;


  const isFav = dataFav.find(
    (fav) => fav.title === data.title
  );
  
  if (isFav !== undefined) {
    article.classList.add('js-fav');
  }

  animeList.appendChild(article);
}

function handleShowTitle(event) {
  event.preventDefault();
  fetchItems();
}

function handleClickReset() {
  location.reload();
}

function handleClickResetAllFav() {
  dataFav = [];
  localStorage.clear();
  location.reload();
}

function setInLocalStorage() {
  localStorage.setItem('dataLocalStorageFav', JSON.stringify(dataFav));
}

function getFromLocalStorage() {
  const savedDataFav = localStorage.getItem('dataLocalStorageFav');
  if (savedDataFav === null) {
    dataFav = [];
  } else {
    dataFav = JSON.parse(savedDataFav);
    renderAllItemsFav();
  }
}
getFromLocalStorage();

buttonSearch.addEventListener('click', handleShowTitle);
buttonReset.addEventListener('click', handleClickReset);
buttonResetFav.addEventListener('click', handleClickResetAllFav);
