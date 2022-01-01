'use strict';

console.log('>> Ready :)');
const animeListFav = document.querySelector('.js-anime_list_fav');
const animeList = document.querySelector('.js-anime_list');
const searchInputTitle = document.querySelector('.js-search_input_title');
const buttonSearch = document.querySelector('.js-button_search');
const buttonReset = document.querySelector ('.js-button_reset');
const defaultImage ='https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

let data = [];
let dataFav = [];


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
  dataFav.push(event.currentTarget.dataset);

  renderAllItemsFav();
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

  animeList.appendChild(article);
}

function handleShowTitle(event) {
  event.preventDefault();
  fetchItems();
}

function handleClickReset(){
  location.reload();
}

buttonSearch.addEventListener('click', handleShowTitle);
buttonReset.addEventListener ('click', handleClickReset);

