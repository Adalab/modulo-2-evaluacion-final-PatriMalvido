'use strict';

function handleClickResetAllFav() {
  dataFav = [];
  localStorage.clear();
  location.reload();
}

buttonResetFav.addEventListener('click', handleClickResetAllFav);


//Eliminar un solo favorito al hacer click
/*
function handleclickIconResetFav(){
  dataFav= [];
  localStorage.clear();
  location.reload();




  buttonIconResetFav.addEventListener('click', handleclickIconResetFav);

*/


