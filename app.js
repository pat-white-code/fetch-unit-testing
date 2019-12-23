let input = document.getElementById('input');
let abv_gt = document.getElementById('abv_gt');

const thenBeer = () => {
  let id = input.value;
  fetch('https://api.punkapi.com/v2/beers/'+id)
    .then(res => res.json())
    .then(data => {
      displayBeer(data[0])
      console.log(data[0])
    }
      )
}

const asyncBeer = async() => {
  let abv = abv_gt.value;
  let response = await fetch(`https://api.punkapi.com/v2/beers/?abv_gt=${abv}`);
  let results = await response.json();
  let beers = results;
  displayBeers(beers);
  console.log(beers);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', asyncBeer)

const displayBeers = (beersArr) => {
  beersArr.forEach(beer => renderBeer(beer));
}

// const displayBeer = (beer) => {
//   let imgContainer = document.getElementById('img-container');
//   imgContainer.innerHTML = '';
//   const name = document.getElementById('name')
//   name.innerText = beer.name;
//   const abv = document.getElementById('abv');
//   abv.innerText = beer.abv;
//   const desc = document.getElementById('desc');
//   desc.innerText = beer.description;
//   let img = document.createElement('img');
//   img.src = beer.image_url;
//   img.classList.add('beer-img')
//   imgContainer.appendChild(img)
// }

const renderBeer = (beer) => {
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  let infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  let beerSection = document.getElementById('beers')
  let card = document.createElement('div');
  card.classList.add('beer-card');
  let img = document.createElement('img');
  img.src = beer.image_url;
  img.classList.add('beer-img');
  let h1 = document.createElement('h1');
  h1.innerText = beer.name;
  let h2 = document.createElement('h2');
  h2.innerText = beer.abv;
  let p = document.createElement('p');
  p.innerText = beer.description;
  imgContainer.appendChild(img);
  infoContainer.appendChild(h1);
  infoContainer.appendChild(h2);
  infoContainer.appendChild(p);
  card.appendChild(imgContainer);
  card.appendChild(infoContainer);
  beerSection.appendChild(card);
}