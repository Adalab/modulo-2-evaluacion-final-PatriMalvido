'use strict';

function handleClickResetAllFav() {
  dataFav = [];
  localStorage.clear();
  location.reload();
}

buttonResetFav.addEventListener('click', handleClickResetAllFav);


//Eliminar un solo favorito al hacer click

function handleclickIconResetFav(){
  dataFav= [];
  localStorage.clear();
  location.reload();
}



const resetIconFav = document.querySelectorAll('.js-reset_Icon_Fav');


for (eachresetIconFav of resetIconFav){
  buttonIconResetFav.addEventListener('click', handleclickIconResetFav);
}



