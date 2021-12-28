'use strict';

console.log('>> Ready :)');

const animeList = document.querySelector('.js-anime_list');
const searchInputTitle = document.querySelector('.js-search_input_title');
const buttonSearch = document.querySelector('.js-button_search');

let data = [];
let dataList = [];

fetch(`https://api.jikan.moe/v3/search/anime?q=${searchInputTitle.value}`)
  .then((response) => response.json())
  .then((dataFromApi) => {
    data = dataFromApi.results;
    console.log(data);
    renderAllTitles();
  });

function renderAllTitles(){
    animeList.innerHTML = '';
    for (const eachAnime of data){
    renderTitle(eachAnime);
}
}


function renderTitle(data) {
 
  animeList.innerHTML += `
<article class="movie">
    <img class="" src="${data.image_url}" alt="">
    <h3 class="card_title">${data.title}</h3>
</article>`;
}

function handleShowTitle(event){
    const selectedAnimeTitle = event.currentTarget.dataset.title;
    dataList.push(selectedAnimeTitle);

}

buttonSearch.addEventListener('click', handleShowTitle);
