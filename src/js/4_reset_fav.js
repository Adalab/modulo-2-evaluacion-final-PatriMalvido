'use strict';

function handleClickResetAllFav() {
  dataFav = [];
  localStorage.clear();
  location.reload();
}

buttonResetFav.addEventListener('click', handleClickResetAllFav);
