'use strict';

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
