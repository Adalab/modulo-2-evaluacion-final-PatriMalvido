//VARIABLES GLOBALES//

'use strict';

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