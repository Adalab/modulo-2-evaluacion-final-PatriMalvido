'use strict';






function handleAnimeFav(event) {
  const existsFav = dataFav.find(
    (fav) => fav.title === event.currentTarget.dataset.title
  );

  if (existsFav === undefined) {
    dataFav.push(event.currentTarget.dataset);
    event.currentTarget.classList.add('js-fav');
    setInLocalStorage();
    renderAllItemsFav();
  } else {
    alert('La serie de anime ya está en la lista de favoritos');
  }
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

function renderItem(data) {
  let imageUrl = data.image_url;

  if (data.image_url === null) {
    imageUrl = defaultImage;
  }

  const article = document.createElement('article');
  article.classList.add('js-anime');
  article.classList.add('js-article');
  article.dataset.title = data.title;
  article.dataset.imageUrl = imageUrl;
  article.dataset.airing = data.airing;
  let html = `<img class="js-image" src="${imageUrl}" alt="" placeholder="">`;
  html += `<h3 class="js-card__title">${data.title}</h3>`;


  if (data.airing === true){
    html+=`<h3> <a href=${data.url}>Mas detalles </h3>`;
  
  }else {
    html+=`<h3>No se está emitiendo</h3>`;
  }



  article.innerHTML = html;

  const isFav = dataFav.find((fav) => fav.title === data.title);

  if (isFav !== undefined) {
    article.classList.add('js-fav');
  }

  animeList.appendChild(article);
}
